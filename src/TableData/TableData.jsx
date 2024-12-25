import { useEffect, useState } from 'react';
import "./tableData.css";
import Modal from "../Modal/Modal.jsx";

function TableData({ modalActive, setModalActive }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editItem, setEditItem] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/getAll');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteItem = async (item) => {
        try {
            const findElemIdResponse = await fetch(`http://localhost:3000/findItem/${item.company}`);
            if (!findElemIdResponse.ok) {
                throw new Error('Ошибка при поиске элемента');
            }

            const findElemIdData = await findElemIdResponse.json();
            const findElemId = findElemIdData.id;

            if (window.confirm('Вы уверены, что хотите удалить этот элемент?')) {
                const response = await fetch(`http://localhost:3000/delete/${findElemId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    fetchData();
                } else {
                    throw new Error('Ошибка при удалении элемента');
                }
            }
        } catch (error) {
            setError(error);
        }
    };

    const patchItem = async (item) => {
        try {
            const findElemIdResponse = await fetch(`http://localhost:3000/findItem/${item.company}`);
            if (!findElemIdResponse.ok) {
                throw new Error('Ошибка при поиске элемента');
            }

    console.log(findElemIdResponse);
            const findElemIdData = await findElemIdResponse.json();
            const findElemId = findElemIdData.id;

            if (window.confirm('Вы уверены, что хотите изменить этот элемент?')) {
                setEditItem(item);
                console.log('item', item)
                setModalActive(true);
                // подставляю в поле полученные значения
            }
        } catch (error) {
            setError(error);
        }
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <>
            {data.map(item => (
                <div key={item.company} className="tableDataWrapper">
                    <div className='cell controlBtn'>
                        <button onClick={() => deleteItem(item)} style={{height: 30}}>DELETE</button>
                        <button onClick={() => patchItem(item)} style={{height: 30}}>PATCH</button>
                    </div>
                    <div className='cell start_cell'>{item.company}</div>
                    <div className='cell'>{item.vacancy}</div>
                    <div className='cell'>{item.minSalary}...{item.maxSalary}</div>
                    <div className='cell'>{item.resStatus}</div>
                    <div className='cell'>{item.note}</div>
                </div>
            ))}
            {/*<Modal active={modalActive} setActive={setModalActive} editItem={editItem} /> /!* Передача editItem в модальное окно *!/*/}

        </>
    );
}

export default TableData;