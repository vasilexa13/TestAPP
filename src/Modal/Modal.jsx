import "./modal.css"

const Modal = ({active , setActive, children}) => {
    return(
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active":"modal_content"} onClick={e=>e.stopPropagation()}>
                <div>
                    <label htmlFor='companyName'>Company Name</label>
                    <input type='text' id="companyName"></input>
                </div>

                <div>
                    <label htmlFor='vacancyName'>Vacancy Name</label>
                    <input type='text' id='vacancyName'></input>
                </div>

                <div>
                    <label htmlFor="minSallary">Minimum Salary (100-10000):</label>
                    <input type="number" id="minSallary" name="tentacles" min="100" max="10000"/>
                </div>

                <div>
                    <label htmlFor="maxSallary">Maximum Salary (100-10000):</label>
                    <input type="number" id="maxSallary" name="tentacles" min="100" max="10000"/>
                </div>

                <div className='reqStatus'>
                    <div>
                        <h5>Request Status</h5>
                    </div>
                    <div>
                        <select>
                            <option>false</option>
                            <option>true</option>
                        </select>
                    </div>

                </div>

                <div>
                    <label htmlFor="note">note</label>
                    <textarea id="note" name="note" rows="2" cols="22" value='type some note here!!!'>
                    </textarea>
                </div>

                <div>
                    <button>OK</button>
                    <button onClick={()=>setActive(false)}>CANCEL</button>
                </div>
                {children}
            </div>
        </div>

    )
}


export default Modal