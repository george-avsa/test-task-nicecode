import NoteItem from "./NoteItem";

function Notes({person}) {
    return (
        <div className="note-list">
            {person.notes.map(note => (
                <NoteItem note={note}></NoteItem>
            ))}
        </div>
    );
}

export default Notes;