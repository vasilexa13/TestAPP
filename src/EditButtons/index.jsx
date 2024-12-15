import './index.css'
import DellComponent from "./DeleteBTN.jsx";
import PatchComponent from "./PatchBTN.jsx";

function EditButtons() {
    function dellElement (){
        console.log("deleted");
    }
    function patchElement (){
        console.log("patched");
        return
    }
    return (
        <div className="editBtn">
            <div className="hoveredCell" onClick={() => {dellElement()}}>
                <DellComponent className='centredCell'/>
            </div>

            <div className="hoveredCell" onClick={() => {patchElement()}}>
                <PatchComponent className='centredCell '/>
            </div>
        </div>
    )
}

export default EditButtons