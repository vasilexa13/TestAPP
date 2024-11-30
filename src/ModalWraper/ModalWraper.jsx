import {useState} from "react";
import Modal from "../Modal/Modal.jsx";
import AddNewField from "../AddNewField/AddNewField.jsx";


const ModalWraper = () => {
    const [modalActive, setModalActive] = useState(false);

    return(
        <>
            <Modal active={modalActive} setActive={setModalActive}/>

            {/*не рабтает нажатие на кнопку*/}
            <AddNewField onClick={()=>setModalActive(true)}/>

        </>
        )

}
export default ModalWraper;
