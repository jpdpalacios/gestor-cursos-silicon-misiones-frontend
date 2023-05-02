import React from 'react';
import './CourseCard.css';
import imgTest from '../../assets/img/image-course-card-test.png'

function CourseCard() {
  return (
    <div className="CourseCard">
        <div className="course-card-image">
            <img src={imgTest} alt="" />
            <p>Virtual</p>
        </div>
            <div className="course-card-name">
            <h5>Desarrollo Web Full Stach con Java</h5>
            </div>
    </div>
  );
}

export default CourseCard;
