import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="tableHeadWrapper">
        <div className="cell">Компания</div>
        <div className="cell">Вакансия</div>
        <div className="cell">Зарплатная вилка</div>
        <div className="cell">Статус отклика</div>
        <div className="cell">Заметка</div>
      </div>
    </>
  )
}

export default App
