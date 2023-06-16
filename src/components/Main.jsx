import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return (
      <div className="flex items-center justify-center h-full w-full opacity-50 ">
        ノートが選択されていません
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-11/12 mx-auto">
        <input
          id="title"
          type="text"
          className="border block w-full h-11 my-5"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          className="border resize-none block w-full h-60"
          placeholder="ノートの内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        />
      </div>
      <div className="w-full h-3/6 mt-auto p-8 bg-slate-100">
        <p className="text-2xl font-bold">{activeNote.title}</p>
        <ReactMarkdown>
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
