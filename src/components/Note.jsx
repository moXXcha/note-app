import React from "react";

const Note = ({ note, onDeleteNote, activeNote, setActiveNote }) => {
  return (
    <div
      className={`px-6 py-5 cursor-pointer hover:bg-slate-100 transition-all ${
        note.id === activeNote && "bg-slate-100"
      }`}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="space-y-3">
        <div className="flex justify-between">
          <p className="font-bold">{note.title}</p>
          <button
            className="text-blue-500"
            onClick={() => onDeleteNote(note.id)}
          >
            削除
          </button>
        </div>
        <p>{note.content}</p>
        <small className="opacity-50">
          最後の修正日 :{" "}
          {new Date(note.modDate).toLocaleDateString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    </div>
  );
};

export default Note;
