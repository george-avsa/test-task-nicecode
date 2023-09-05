import { useEffect } from "react";
import Notes from "./Notes";
import Consultation from "./Consultation";
import Video from "./Video";
import PersonEvents from "./PersonEvents";

function Content({person, personControlsMenu}) {

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