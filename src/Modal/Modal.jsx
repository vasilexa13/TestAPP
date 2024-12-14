import "./modal.css";
import { useInput } from './modalValidation.jsx';
import {useState} from "react";

const Modal = ({ active, setActive, children }) => {
    const companyName = useInput("", { isEmpty: true, minLength: 3 });
    const vacancyName = useInput("", { isEmpty: true, minLength: 5 });
    const minSalary = useInput("", { isEmpty: true, minLength: 3, maxLength: 4 });
    const maxSalary = useInput("", { isEmpty: true,minLength: 3, maxLength: 4 });

    const [note, setNote] = useState('')
    const handleNoteChange = (event) => {
        setNote(event.target.value); // Обновляем состояние при вводе текста
    };
    // Новое состояние для хранения значения выбранного статуса
    const [resStatus, setResStatus] = useState("заявка подана"); // Задаем значение по умолчанию

    async function submitData() {

        const data = {
            "company": companyName.value,
            "vacancy": vacancyName.value,
            "minSalary": minSalary.value,
            "maxSalary": maxSalary.value,
            "note": note,
            "resStatus": resStatus
        }
        try {
            console.log(data)
            const response = await fetch('http://localhost:3000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            setActive(false);
            companyName.setValue('');
            companyName.setIsDirty(false);
            vacancyName.setValue('');
            vacancyName.setIsDirty(false);
            minSalary.setValue('');
            minSalary.setIsDirty(false);
            maxSalary.setValue('');
            maxSalary.setIsDirty(false);
        } catch (err) {
            console.error("Error: ", err);
        }
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <form>
                    <div className='centred'>
                        <label htmlFor='companyName'>Company Name*</label>
                        <input className="flex_elem" onChange={companyName.onChange} onBlur={companyName.onBlur} value={companyName.value}
                               type='text' id="companyName" name='companyName'></input>
                    </div>

                    <div className='centred'>
                        <label htmlFor='vacancyName'>Vacancy Name*</label>
                        <input className="flex_elem" onChange={vacancyName.onChange} onBlur={vacancyName.onBlur} value={vacancyName.value} type='text' id='vacancyName' placeholder="Junior Full Stack developer"></input>
                    </div>

                    <div className='centred'>
                        <label htmlFor="minSalary">Minimum Salary* (100-9999) </label>
                        <input
                            className="flex_elem"
                            type="number"
                            id="minSallary"
                            name="tentacles"
                            min='100'
                            max={maxSalary.value}
                            value={minSalary.value}
                            onChange={minSalary.onChange}
                            onBlur={minSalary.onBlur}
                        />
                    </div>

                    <div className='centred'>
                        <label htmlFor="maxSalary">Maximum Salary* (100-9999) </label>
                        <input
                            className="flex_elem"
                            type="number"
                            id="maxSallary"
                            name="tentacles"
                            min={minSalary.value}
                            max="9999"
                            value={maxSalary.value}
                            onChange={maxSalary.onChange}
                            onBlur={maxSalary.onBlur}
                        />
                    </div>

                    <div className='centred'>
                        <div>
                            <div>Request Status*</div>
                        </div>
                        <div className="flex_elem">
                            <select value={resStatus} onChange={(e) => setResStatus(e.target.value)}>
                                <option value="заявка подана">заявка подана</option>
                                <option value="в процессе рассмотрения" >в процессе рассмотрения</option>
                                <option value="приглашение на интервью">приглашение на интервью</option>
                                <option value="не подходит">не подходит</option>
                                <option value="отказ">отказ</option>
                                <option value="jпредложение о работе">предложение о работе</option>
                                <option value="вакансия закрыта">вакансия закрыта</option>
                            </select>
                        </div>
                    </div>

                    <div className='centred'>
                        <label htmlFor="note">Note*</label>
                        <textarea className="flex_elem"
                                  id="note"
                                  name="note"
                                  rows="3"
                                  cols="22"
                                  placeholder="some note here"
                                  value={note.value}
                                  onChange={handleNoteChange}
                        >
                    </textarea>
                    </div>

                    <div className='centred' style={{color: "orange"}}>
                        *All fields are required to be completed
                    </div>

                    <div className='centred btnModal'>
                        <button type='submit'
                                onClick={submitData}
                                disabled={
                                    !companyName.inputValid ||
                                    !vacancyName.inputValid ||
                                    !minSalary.inputValid ||
                                    !maxSalary.inputValid ||
                                    (minSalary.value > maxSalary.value)
                                }>OK
                        </button>
                        <button type='button' onClick={() => {
                            setActive(false);
                            companyName.setValue('');
                            companyName.setIsDirty(false);
                            vacancyName.setValue('');
                            vacancyName.setIsDirty(false);
                            minSalary.setValue('');
                            minSalary.setIsDirty(false);
                            maxSalary.setValue('');
                            maxSalary.setIsDirty(false);
                        }}
                        >CANCEL
                        </button>
                    </div>

                    <div className='centred' style={{color: "orange", textAlign: 'center'}}>
                        Click "CANCEL" button to clear the form
                    </div>

                    <div className='centred'>
                        <div>
                            {companyName.isDirty && companyName.isEmpty &&
                                <div style={{color: "red"}}>Company Name* не может быть пустым</div>}
                            {companyName.isDirty && companyName.isMinLengthError &&
                                <div style={{color: "red"}}>Company Name* должно быть более {companyName.minLength} символов </div>}
                            {vacancyName.isDirty && vacancyName.isEmpty &&
                                <div style={{color: "red"}}>Vacancy Name* не может быть пустым</div>}
                            {vacancyName.isDirty && vacancyName.isMinLengthError &&
                                <div style={{color: "red"}}>Vacancy Name* должно быть более {vacancyName.minLength} символов </div>}
                            {minSalary.isDirty && minSalary.isEmpty &&
                                <div style={{color: "red"}}>Minimum Salary* не может быть пустым</div>}
                            {maxSalary.isDirty && maxSalary.isEmpty &&
                                <div style={{color: "red"}}>Maximum Salary* не может быть пустым</div>}
                            {(minSalary.value>maxSalary.value)&&
                                <div style={{color: "red"}}>Проверь значения Minimum Salary* и Maximum Salary* </div>
                            }

                        </div>
                    </div>
                    {children}
                </form>
            </div>
        </div>
    )
}

export default Modal;

