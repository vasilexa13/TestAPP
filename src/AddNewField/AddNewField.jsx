import MyComponent from "./IconPlus.jsx";
import  "./AddNewField.css";

function AddNewField({onClick}) {
    return (
        <div className="flex__level">
            <MyComponent className="icon" onClick={onClick}/>
            <div onClick={onClick}>click to kreate new field</div>
        </div>
    )
}

export default AddNewField;