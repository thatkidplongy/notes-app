import React from "react";
import { Note } from "../App";

const FormNote = ({
  newNote,
  setNewNote,
  setNotes,
  notes,
  isNoteEditable,
  setIsNoteEditable,
}: {
  newNote: Note;
  setNewNote: React.Dispatch<React.SetStateAction<Note>>;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  notes: Note[];
  isNoteEditable: boolean;
  setIsNoteEditable: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();

        if (!newNote.title || !newNote.content) {
          return;
        }

        setNotes((prev) => [...prev, newNote]);
        setNewNote({
          id: Date.now(),
          title: "",
          content: "",
        });
      }}
      className="flex w-full lg:w-1/4 flex-col gap-4"
      id="sidebar"
    >
      <input
        className="border border-primary bg-white rounded-md p-2 focus:outline-none"
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        placeholder="Title"
        type="text"
        value={newNote.title}
      />
      <textarea
        className="border focus:outline-none border-primary bg-white rounded-md h-32 p-2"
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        placeholder="Content"
        rows={10}
        value={newNote.content}
      />
      {isNoteEditable ? (
        <div className="flex w-full justify-around gap-4">
          <button
            className="text-white bg-accent rounded-md p-2 w-full"
            onClick={() => {
              const newNotes = notes.map((note) => {
                if (note.id === newNote.id) {
                  return newNote;
                }
                return note;
              });

              setNotes(newNotes);
              setIsNoteEditable(false);
              setNewNote({
                id: Date.now(),
                title: "",
                content: "",
              });
            }}
            type="button"
          >
            <span>Save</span>
          </button>
          <button
            className="text-white bg-error rounded-md p-2 w-full"
            onClick={() => {
              setIsNoteEditable(false);
              setNewNote({
                id: Date.now(),
                title: "",
                content: "",
              });
            }}
            type="button"
          >
            <span>Cancel</span>
          </button>
        </div>
      ) : (
        <button className="text-white bg-accent rounded-md p-2" type="submit">
          <span>Add Note</span>
        </button>
      )}
    </form>
  );
};

export default FormNote;
