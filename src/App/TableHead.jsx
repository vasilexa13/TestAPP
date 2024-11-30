import './TableHead.css'
import MyComponent from "../AddNewField/IconPlus.jsx";
import {useState} from "react";
import Modal from "../Modal/Modal.jsx";

function TableHead() {
    const [modalActive, setModalActive]=useState(false);
  return (
    <>
        <Modal active={modalActive} setActive={setModalActive}/>
      <div className="tableHeadWrapper" >
          <div className="cell wrapper" >
              <MyComponent
                  onClick={()=>{setModalActive(true)}}
              />
              <div onClick={()=>{setModalActive(true)}}>new Field</div>
          </div>
        <div className="cell">Компания</div>
        <div className="cell">Вакансия</div>
        <div className="cell">Зарплатная вилка</div>
        <div className="cell">Статус отклика</div>
        <div className="cell">Заметка</div>
      </div>
    </>
  )
}

export default TableHead
