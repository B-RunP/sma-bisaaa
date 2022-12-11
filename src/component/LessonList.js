import React from "react";
import LessonItem from "./LessonItem";

function LessonList({ lessons }) {
    return (
        <div className="lessons-list">
            {
                lessons.length === 0 ? (
                    <p className="lessons-list__empty-message">Loading...</p>
                ) : (
                    lessons.map((lesson) => (
                        <LessonItem key={lesson.id} id={lesson.id} description={lesson.description} title={lesson.title} img_src={lesson.img_src} />
                    ))
                )
            }
        </div>
    )
}

export default LessonList;