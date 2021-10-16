import {useState} from "react"
import {FiSave} from "react-icons/fi"
const AddNote=({handleAddnote})=>{
    const [noteText, setNoteText] = useState("")
    const charLimit=350;
    const handleChange=(event)=>{
        if (charLimit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    };
    const handleSaveClick=()=>{
        if (noteText.trim().length>0)
        {
            handleAddnote(noteText);
            setNoteText("");
        }
        else
        {
            alert("No Note Added!")
        }
    }
    return(
        <div className="note new">
            <textarea rows="10" cols="10" placeholder="Type to add a note" onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{charLimit-noteText.length} Remaining</small>
                <FiSave className="save" onClick={handleSaveClick}/>
            </div>
        </div>
    )
}
export default AddNote;
