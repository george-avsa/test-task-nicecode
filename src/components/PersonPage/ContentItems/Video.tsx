import { dateToFormat } from "../../../fetures/dateToFomat";
import { Video } from "./../../../persons";

function Video({videos}:{videos: Video[]}) {

    return (
        <>
            {videos.map((video, i) => (
                <div className="consultation" key={i}>
                    <img src={`./images/previews/${video.previewImage}`} alt={video.name} className="video__preview" />
                    <div className="consultation__description">
                        <span className="consultation__name">
                            {video.name}
                        </span>
                        <time className="consultation__time video__author-name">
                            {video.authorName}
                        </time>
                    </div>
                    {!!(+new Date(video.startDatetime) && +new Date(video.endDatetime)) && (
                        <span className="consultation__not-confirmed video__date">
                            {dateToFormat('dd.mm.yyyy - dd.mm.yyyy', video.startDatetime, video.endDatetime)}
                        </span>
                    )}
                </div>
            ))}
        </>
    );
}

export default Video;