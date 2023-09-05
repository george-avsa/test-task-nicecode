import Icon from "./../UI/Icon";
import {ReactComponent as MoreIcon} from "./../../assets/more.svg"
import { dateToFormat } from "./../../fetures/dateToFomat";

function NoteItem({note}) {
    return (
        <div className="note-item">
            <div className="note-item__text">
                <p>
                    <span className="note-item__time">{dateToFormat('dd.mm.yyyy', note.date)}</span>
                    {note.text}  
                </p>
                <Icon className="node-item__more"><MoreIcon/></Icon>
            </div>
            {note.uploaded && (
                <div className="node-item__upload">
                    <img src={`./images/notesUploaded/${note.uploaded}`} alt="" />
                </div>
            )}
        </div>
    );
}

export default NoteItem;