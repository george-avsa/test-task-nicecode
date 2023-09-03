import { Person } from "persons";
import {ReactComponent as MoreIcon} from "./../../assets/more.svg"

function PersonControls({person}:{person:Person}) {
    return (
        <div className="person-page__controls">
            <div className="person-page__avatar">
                <img src={`./images/avatars/${person.avatar}`} alt="" />
            </div>
            <div className="person-page__info">
                <h2 className="person-page__name">{`${person.firstName} ${person.lastName}`}</h2>
                <span className="person-page__description">30 лет, муж</span>
            </div>
            <MoreIcon className="person-page__more" />
        </div>
    );
}

export default PersonControls;