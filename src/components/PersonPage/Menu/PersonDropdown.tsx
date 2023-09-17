import { useDispatch } from "react-redux";
import { loadPersonToForm } from "./../../../store/forms";
import store, { AppDispatch } from "./../../../store";

function PersonDropdown() {

    const dispatch = useDispatch<AppDispatch>();
    const handleClickChange = () => {
        dispatch(loadPersonToForm(0))
    }

    return (
        <div className="person-page__dropdown">
            <span className="dropdown__item" onClick={handleClickChange}>
                Изменить
            </span>
            <span className="dropdown__item">
                Удалить
            </span>
        </div>
    );
}

export default PersonDropdown;