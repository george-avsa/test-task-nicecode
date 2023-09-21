import Notes from "./ContentItems/Notes";
import Consultation from "./ContentItems/Consultation";
import Video from "./ContentItems/Video";
import PersonEvents from "./ContentItems/PersonEvents";
import { useSelector } from "react-redux";
import { RootState } from "store";

function Content() {
    const person = useSelector((state:RootState) => state.personDetails);
    const personControlsMenu = useSelector((state: RootState) => state.options.personControlsMenu);
    return (
        <div className="person-page__content">
            {personControlsMenu.find(menu => menu.active).name === 'Заметки' && <Notes person={person}></Notes>}
            {personControlsMenu.find(menu => menu.active).name === 'Консультации' && <Consultation consultations={person.meetings}></Consultation>}
            {personControlsMenu.find(menu => menu.active).name === 'Видео' && <Video videos={person.videos}></Video>}
            {personControlsMenu.find(menu => menu.active).name === 'Мероприятия' && <PersonEvents personEvents={person.events}></PersonEvents>}
        </div>
    );
}

export default Content;