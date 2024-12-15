import { useEffect, useState } from 'react';
import "./tableData.css";
import EditButtons from "../EditButtons/index.jsx";

function TableData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        console.log(item, 'item');
        console.log(item.company, 'item.company');
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
                    // После успешного удаления данных снова загружаем данные
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
        console.log(item, 'item');
        console.log(item.company, 'item.company');
        try {
            const findElemIdResponse = await fetch(`http://localhost:3000/findItem/${item.company}`);
            if (!findElemIdResponse.ok) {
                throw new Error('Ошибка при поиске элемента');
            }

            const findElemIdData = await findElemIdResponse.json();
            const findElemId = findElemIdData.id;

            if (window.confirm('Вы уверены, что хотите изменить этот элемент?')) {
                const response = await fetch(`http://localhost:3000/update/${findElemId}`, {
                    method: 'PATCH',
                });

                if (response.ok) {
                    console.log(response);
                    //вызываем модальное окно
                    //подставляем даные в модальное окно

                //     fetchData();
                } else {
                    throw new Error('Ошибка при удалении элемента');
                }
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
                        {/*<EditButtons />*/}
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
        </>
    );
}

export default TableData;

