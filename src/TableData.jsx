import { useEffect, useState } from 'react';
import "./App.css"

function TableData() {
    const [data, setData] = useState([]); // Для хранения полученных данных
    const [loading, setLoading] = useState(true); // Для отслеживания состояния загрузки
    const [error, setError] = useState(null); // Для хранения любых ошибок

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/getAll');
                if (response.status === 200) {
                    const result = await response.json();
                    setData(result);
                    setLoading(false);
                }
                else{
                    setError(null);
                    throw new Error('Network response was not ok');
                }
            }catch (error){
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <>
                    {data.map(item => (
                    <div key={item.company} className="tableHeadWrapper">
                        <div className='cell'>{item.company}</div>
                        <div className='cell'>{item.vacancy}</div>
                        <div className='cell'>{item.salaryRange.min}...{item.salaryRange.max}</div>
                        <div className='cell'>{toString(item.resStatus)}</div>
                        <div className='cell'>{item.note}</div>
                    </div>

                ))}

        </>
    )
}

export default TableData

