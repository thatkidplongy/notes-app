import { Note } from "../App";
import { CloseIcon } from "./CloseIcon";

const NoteCard = ({
  note,
  deleteNote,
  setIsNoteEditable,
  setNewNote,
}: {
  note: Note;
  deleteNote: (note: Note) => void;
  setIsNoteEditable: React.Dispatch<React.SetStateAction<boolean>>;
  setNewNote: React.Dispatch<React.SetStateAction<Note>>;
}) => {
  return (
    <div className="bg-noteBackground rounded-md h-80  w-full transition ease-in-out duration-200 transform hover:-translate-y-2 ">
      <div className="flex rounded-t-md items-center h-1/4 justify-between border-gray-100 border">
        <h2 className="text-xl font-semibold p-2 ">{note.title}</h2>
        <button
          className="p-2"
          onClick={() => {
            deleteNote(note);
            setIsNoteEditable(false);
          }}
        >
          <CloseIcon className="h-3 w-3 stroke-black  cursor-pointer " />
        </button>
      </div>
      <div
        className="h-3/4 w-full rounded-b-md p-2 focus:outline-none bg-gray-600 text-white"
        onClick={() => {
          setNewNote(note);
          setIsNoteEditable(true);
        }}
      >
        {note.content}
      </div>
    </div>
  );
};

export default NoteCard;
