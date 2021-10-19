import AddNote from "./AddNote";
import Note from "./Note"

const NotesList=({notes,handleAddnote,handleDeleteNote})=>{
    return (
        <div className="note-list">
            {notes.map((note)=><Note id={note.id} title={note.title} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
            <AddNote handleAddnote={handleAddnote}/>
        </div>
    )
}

export default NotesList;

