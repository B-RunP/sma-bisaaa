import React from "react";

function LessonDetail({ lessonDetail }) {
    return (
        <div id={lessonDetail.id} className="detail-page">
            <img className="detail-page__img" src={lessonDetail.img_src} alt={lessonDetail.title} />
            <h3 className="detail-page__title">{ lessonDetail.title}</h3>
            <p className="detail-page__body">{lessonDetail.content}</p>
        </div >
    )
}

export default LessonDetail;