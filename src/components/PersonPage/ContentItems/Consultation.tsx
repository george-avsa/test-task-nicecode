import Icon from "./../../UI/Icon";
import {ReactComponent as CameraIcon} from "./../../../assets/camera.svg"
import {ReactComponent as PersonalMeeting} from "./../../../assets/personalMeeting.svg"
import { useEffect } from "react";
import { dateToFormat } from "./../../../fetures/dateToFomat";

function Consultation({consultations}) {
    useEffect(() => {console.log(consultations)}, [])
    return (
        <>
            {consultations.map((consultation, i) => (
                <div className="consultation" key={i}>
                    {consultation.type === 'online' && <Icon><CameraIcon/></Icon>}
                    {consultation.type === 'face-to-face' && <Icon><PersonalMeeting/></Icon>}
                    <div className="consultation__description">
                        <span className="consultation__name">
                            {consultation.name}
                        </span>
                        <time className="consultation__time" dateTime={consultation.startDatetime}>
                            {dateToFormat('', consultation.startDatetime, consultation.endDatetime)}
                        </time>
                    </div>
                    {!consultation.confirmed && <span className="consultation__not-confirmed">Не подтверждена</span>}
                </div>
            ))}
        </>
    );
}

export default Consultation;