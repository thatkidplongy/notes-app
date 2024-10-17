import { useState } from "react";
import "./App.css";
import FormNote from "./components/FormNote";
import NoteCard from "./components/Note";

export type Note = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<Note>({
    id: Date.now(),
    title: "",
    content: "",
  });
  const [isNoteEditable, setIsNoteEditable] = useState(false);

  const deleteNote = (note: Note) => {
    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);
  };

  return (
    <div className="bg-background flex flex-col md:flex-row gap-4 p-8">
      <FormNote
        isNoteEditable={isNoteEditable}
        notes={notes}
        newNote={newNote}
        setIsNoteEditable={setIsNoteEditable}
        setNotes={setNotes}
        setNewNote={setNewNote}
      />
      <div
        className="w-full md:w-3/4 grid lg:grid-rows-3 lg:grid-cols-3 gap-10"
        id="grid"
      >
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            deleteNote={deleteNote}
            setNewNote={setNewNote}
            setIsNoteEditable={setIsNoteEditable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
