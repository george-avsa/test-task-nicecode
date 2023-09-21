import Icon from "../../UI/Icon";
import {ReactComponent as MoreIcon} from "./../../../assets/more.svg"
import { dateToFormat } from "../../../fetures/dateToFomat";
import PersonDropdown from "../Menu/PersonDropdown";
import { useEffect, useRef, useState } from "react";

function NoteItem({note}) {

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className="note-item">
            <div className="note-item__text">
                <p>
                    <span className="note-item__time">{dateToFormat('dd.mm.yyyy', note.date)}</span>
                    {note.text}  
                </p>
                <Icon className="node-item__more" dropdownRef={dropdownRef}>
                    {dropdown && <PersonDropdown setDropdown={setDropdown} />}
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