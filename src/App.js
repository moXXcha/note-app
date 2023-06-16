import { useEffect, useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState("")

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const fillterNotes = notes.filter((note) => note.id !== id)
    setNotes(fillterNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      } else {
        return note
      }
    })

    setNotes(updateNotesArray)
  }

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden text-base flex">
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
};
export default App;
