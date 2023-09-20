import { useDispatch } from "react-redux";
import { loadPersonToForm } from "./../../store/forms";
import store, { AppDispatch } from "./../../store";
import { setModal } from "./../../store/options";

function Dropdown({items}: {items: string[]}) {

    return (
        <div className="person-page__dropdown">
            {items.map((item, i) => (
                <span className="dropdown__item" key={i}>
                    {item}
                </span>
            ))}
        </div>
    );
}

export default Dropdown;