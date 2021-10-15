import NotesList from "./Components/NotesList";
import {nanoid} from "nanoid"
import { useState,useEffect } from "react";
import Search from "./Components/Search";
import Header from "./Header";
const App=()=>{
  	const [notes, setNotes] = useState([{title: "Hello",text: "Hola mi amigo",date:"15/04/20"}]);
  	const addNote = (text,title) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title:title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const [searchText, setSearchText] = useState("")
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
	return (
		<div className={`${darkMode && "dark-mode"}`}>
			<div className="container">
			<Header handleToggleDarkMode={setDarkMode}/>
			<Search handleSearch={setSearchText}/>
			<NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddnote={addNote} handleDeleteNote={deleteNote}/>
		</div>
		</div>
	)
}
export default App;
