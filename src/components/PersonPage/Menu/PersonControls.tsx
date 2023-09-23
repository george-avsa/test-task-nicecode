import { Person } from "./../../../persons";
import {ReactComponent as MoreIcon} from "./../../../assets/more.svg"
import Icon from "../../UI/Icon";
import PersonDropdown from "./PersonDropdown";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../../../store";
import { loadPersonToForm } from "./../../../store/forms";
import { setModal } from "./../../../store/options";

function PersonControls() {

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const person:Person = useSelector((state: RootState) => state.personDetails);

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

    const dispatch = useDispatch<AppDispatch>();

    const handleClickChange = () => {
        dispatch(loadPersonToForm(0))
        setDropdown(false)
    }
    
    const handleClickDelete = () => {
        dispatch(setModal({type: 'promptDeletePerson', closed: false}))
        setDropdown(false)
    }
        
    return (
        <div className="person-page__controls">
            {(!!Object.keys(person).length) && (
            <>
                <div className="person-page__avatar">
                    <img src={`./images/avatars/${person.avatar}`} alt="" />
                </div>
                <div className="person-page__info">
                    <h2 className="person-page__name">{`${person.firstName} ${person.lastName}`}</h2>
                    <span className="person-page__description">30 лет, муж</span>
                </div>
                <Icon className="person-page__more" dropdownRef={dropdownRef}>
                    {dropdown && <PersonDropdown handleClickChange={handleClickChange} handleClickDelete={handleClickDelete}/>}
                    <MoreIcon />
                </Icon>
            </>
            )}
        </div>
    );
}

export default PersonControls;