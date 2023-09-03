import Icon from "./../UI/Icon";
import {ReactComponent as MoreIcon} from "./../../assets/more.svg"

function Notes() {
    return (
        <div className="note-list">
            <div className="note-item">
                <div className="note-item__text">
                    <p>
                        <span className="note-item__time">20.12.2019</span>
                        Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях  
                    </p>
                    <Icon className="node-item__more"><MoreIcon/></Icon>
                </div>
                <></>
            </div>
        </div>
    );
}

export default Notes;