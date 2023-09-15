import { Note } from "persons";
import NoteItem from "./NoteItem";

function Notes({person}) {
    return (
        <div className="note-list">
            {person.notes.map((note: Note) => (
                <NoteItem key={note.id} note={note}></NoteItem>
            ))}
        </div>
    );
}

export default Notes;