import {ReactComponent as CameraIcon} from "./../../../assets/video-camera.svg"
import {ReactComponent as ClockIcon} from "./../../../assets/clock.svg"
import {ReactComponent as CalendarIcon} from "./../../../assets/calendar.svg"
import { dateToFormat } from "./../../../fetures/dateToFomat";
import { IEvent } from "../../../persons";

function PersonEvents({personEvents}:{personEvents: IEvent[]}) {

    return (
        <>
            {personEvents.map((personEvent, i) => (
                <div className="consultation" key={i}>
                    <img src={`./images/previews/${personEvent.previewImage}`} alt={personEvent.name} className="video__preview" />
                    <div className="consultation__description">
                        <span className="consultation__name">
                            {personEvent.name}
                        </span>
                        <div className="event__info">
                            <div className="event-info__item">
                                <CameraIcon/>
                                <span>Вебинар</span>
                            </div>
                            <div className="event-info__item">
                                <CalendarIcon/>
                                <span>{dateToFormat('d+\s\W\syyyy', personEvent.datetime)}</span>
                            </div>
                            <div className="event-info__item">
                                <ClockIcon/>
                                <span>{dateToFormat('hh:mm', personEvent.datetime)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PersonEvents;