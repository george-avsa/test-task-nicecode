import Icon from "../../UI/Icon";
import {ReactComponent as MoreIcon} from "./../../../assets/more.svg"
import { dateToFormat } from "../../../fetures/dateToFomat";
import PersonDropdown from "../Menu/PersonDropdown";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Note } from "persons";
import { loadNoteToForm } from "./../../../store/forms";
import { AppDispatch } from "./../../../store";
import { setModal } from "./../../../store/options";
import { isHtmlElement } from "./../../../types";

function NoteItem({note}:{note: Note}) {

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<AppDispatch>();

    const handleClickChange = () => {
        dispatch(loadNoteToForm(note.id))
        setDropdown(false)
    }
    
    const handleClickDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
        const clickedElement = e.target;
        if (isHtmlElement(clickedElement)) {
            dispatch(setModal({type: `promptDeleteNote`, closed: false, idToManipulate: note.id}))
            setDropdown(false)
        }
    }

    useEffect(() => {
        let timerId: any;
        if (dropdownRef.current !== null) {
            dropdownRef.current.addEventListener('mouseover', () => {
                if (timerId) {
                    clearTimeout(timerId);
                }
                setDropdown(true)
                
            });
            
            dropdownRef.current.addEventListener('mouseout', () => {
                timerId = setTimeout(() => {
                    setDropdown(false)
                }, 500);
            });
        }
        }, [dropdownRef])

    return (
        <div className="note-item" id={note.id}>
            <div className="note-item__text">
                <p>
                    <span className="note-item__time">{dateToFormat('dd.mm.yyyy', note.date)}</span>
                    {note.text}  
                </p>
                <Icon className="node-item__more" dropdownRef={dropdownRef}>
                    {dropdown && <PersonDropdown handleClickChange={handleClickChange} handleClickDelete={handleClickDelete}/>}
                    <MoreIcon/>
                </Icon>
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