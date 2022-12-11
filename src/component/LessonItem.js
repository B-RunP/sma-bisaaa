import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LessonItem({ id, title, content, img_src }) {
    return (
        <div id={id} className="lesson-item">
            <img className="lesson-item__img" src={img_src} alt={title} />
            <Link to={`/detail/${id}`} className="lesson-item__title"><h3>{title}</h3></Link>
            <p className="lesson-item__body">{content}</p>
        </div >
    )
}

LessonItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default LessonItem;