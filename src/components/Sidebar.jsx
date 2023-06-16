import React from "react";
import Note from "./Note";

const Sidebar = ({ onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) => {

  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate)

  return (
    <div className="h-full w-1/6 border-r overflow-y-scroll">
      <div className="w-full h-24 flex items-center justify-between px-5">
        <h1 className="text-3xl font-bold">ノート</h1>
        <button className="text-blue-500 " onClick={onAddNote}>
          追加
        </button>
      </div>
      {sortedNotes.map((note) => (
        <Note key={note.id} note={note} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      ))}
    </div>
  );
};

export default Sidebar;
