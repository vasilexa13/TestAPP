import "./modal.css"
// import {Formik, Field, Form} from "formik";

const Modal = ({active , setActive, children}) => {
    return(
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active":"modal_content"} onClick={e=>e.stopPropagation()}>

                <form>
                    <div className='centred'>
                        <label htmlFor='companyName'>Company Name</label>
                        <input type='text' id="companyName"></input>
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