import './index.css'
import DellComponent from "./DeleteBTN.jsx";
import PatchComponent from "./PatchBTN.jsx";

function EditButtons() {

    return (
        <>
            <dir className="hoveredCell">
                <DellComponent className='centredCell'/>

            </dir>
            <dir className="hoveredCell">
                <PatchComponent className='centredCell '/>

            </dir>
        </>
    )
}

export default EditButtons