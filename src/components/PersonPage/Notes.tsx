import Icon from "./../UI/Icon";
import {ReactComponent as MoreIcon} from "./../../assets/more.svg"
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