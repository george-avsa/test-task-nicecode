import { useDispatch, useSelector } from "react-redux";
import { loadPersonToForm } from "./../../../store/forms";
import store, { AppDispatch, RootState } from "./../../../store";
import { setModal } from "./../../../store/options";
import { useEffect } from "react";

function PersonDropdown({setDropdown}) {

    const dispatch = useDispatch<AppDispatch>();
    const handleClickChange = () => {
        dispatch(loadPersonToForm(0))
        setDropdown(false)
    }
    
    const handleClickDelete = () => {
        dispatch(setModal({type: 'promptDelete', closed: false}))
        setDropdown(false)
    }

    return (
        <div className="person-page__dropdown">
            <span className="dropdown__item" onClick={handleClickChange}>
                Изменить
            </span>
            <span className="dropdown__item" onClick={handleClickDelete}>
                Удалить
            </span>
        </div>
    );
}

export default PersonDropdown;