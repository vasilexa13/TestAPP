import "./modal.css"
import {useEffect, useState} from "react";

const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isMinLengthError, setIsMinLengthError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch(validation){
                case "minLength":
                    (value.length<validations[validation] ) ? setIsMinLengthError(true) : setIsMinLengthError(false);
                    break;
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
            }
        }
    },[value])
    return{
        isEmpty,
        isMinLengthError,
        minLength:validations.minLength,

    }

}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
        if (isDirty){
            setIsDirty(true)
        }
    }

    const onBlur = (e) => {
        setIsDirty(true);
    }

    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

const Modal = ({active , setActive, children}) => {
    const companyName = useInput("", {isEmpty:true , minLength:3});

      return(
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active":"modal_content"} onClick={e=>e.stopPropagation()}>

                <form>
                    <div className='centred'>
                        <label  htmlFor='companyName'>Company Name</label>
                        <input onChange={companyName.onChange} onBlur={companyName.onBlur} value={companyName.value} type='text' id="companyName" name='companyName'></input>
                        {(companyName.isDirty && companyName.isEmpty) && <div style={{color:"red"}}>Поле не может быть пустым</div>}
                        {(companyName.isDirty && companyName.isMinLengthError) && <div style={{color:"red"}}>Поле должно быть более {companyName.minLength} cимволов </div>}
                    </div>

                    <div className='centred'>
                        <label htmlFor='vacancyName'>Vacancy Name</label>
                        <input type='text' id='vacancyName' placeholder="Junior Full Stack developer"></input>
                    </div>

                    <div className='centred'>
                        <label htmlFor="minSallary">Minimum Salary (100-10000):</label>
                        <input type="number" id="minSallary" name="tentacles" min="100" max="10000"/>
                    </div>

                    <div className='centred'>
                        <label htmlFor="maxSallary">Maximum Salary (100-10000):</label>
                        <input type="number" id="maxSallary" name="tentacles" min="100" max="10000"/>
                    </div>

                    <div className='centred'>
                        <div >
                            <div >Request Status</div>
                        </div>
                        <div >
                            <select>
                                <option selected value='false'>false</option>
                                <option value='true'>true</option>
                            </select>
                        </div>

                    </div>

                    <div className='centred'>
                        <label htmlFor="note">Note</label>
                        <textarea id="note" name="note" rows="2" cols="22" placeholder="some note here">
                    </textarea>
                    </div>

                    <div className='centred btnModal'>
                        <button type='submit'>OK</button>
                        <button type='reset' onClick={()=>setActive(false)}>CANCEL</button>
                    </div>
                    {children}
                </form>

            </div>
        </div>

    )
}


export default Modal