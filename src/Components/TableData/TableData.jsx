import {useEffect, useState} from 'react';
import "./tableData.css";
import {deleteItem} from "../../actions/deleteFunction.jsx";
import {editItem} from "../../actions/editFunction.jsx";

function TableData({modalActive, setModalActive}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [editItem, setEditItem] = useState(null);

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

    const handleDeleteItem = async (item) => {
        await deleteItem(item, modalActive, setModalActive, fetchData);
    };

    const handleEditItem = async (item) => {
        const editItemId = await editItem(item);
        // Дальше обработайте ID для редактирования item
        console.log(item);
        console.log(editItemId);
        setModalActive(true)
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <>
            {data.map(item => (
                <div key={item.company} className="tableDataWrapper">
                    <div className='cell controlBtn'>
                        <button onClick={() => handleDeleteItem(item)}>DELETE</button>
                        <button onClick={() => handleEditItem(item)}>EDIT</button>
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