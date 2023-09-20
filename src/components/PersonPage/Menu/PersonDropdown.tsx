import { useDispatch } from "react-redux";
import { loadPersonToForm } from "./../../../store/forms";
import store, { AppDispatch } from "./../../../store";
import { setModal } from "./../../../store/options";

function PersonDropdown() {

    const dispatch = useDispatch<AppDispatch>();
    const handleClickChange = () => {
        dispatch(loadPersonToForm(0))
    }
    
    const handleClickDelete = () => {
        dispatch(setModal({type: 'promptDelete', closed: false}))
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