import Button from "./../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../../store";
import { isHtmlElement } from "./../../types";
import { setModal } from "./../../store/options";
import { deletePerson } from "./../../store/personList";
import { useEffect } from "react";

function PersonDelete() {
    const activePerson = useSelector((state: RootState) => state.personDetails);
    
    const dispatch = useDispatch<AppDispatch>();

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const clickedElement = e.target; 
        if (isHtmlElement(clickedElement)) {
            const innerText = clickedElement.innerText;
            if (innerText === 'Отменить') {
                dispatch(setModal({type: '', closed: true}))
            } else if (innerText === 'Удалить') {
                dispatch(deletePerson(activePerson.id))
            }
        }
    }

    return (
        <div className="modal__prompt">
            <p>
                Вы действительно хотите удалить пользователя 
                <b>{` ${activePerson.lastName} ${activePerson.firstName}`}</b>?
            </p>
            <div className="modal__buttons">
                <Button color='grey' onClick={handleClickButton}>Отменить</Button>
                <Button color='red' onClick={handleClickButton}>Удалить</Button>
            </div>
        </div>
    );
}

export default PersonDelete;