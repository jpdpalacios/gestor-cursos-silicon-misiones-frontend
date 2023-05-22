import React, { useState } from 'react';
import './CourseCard.css';
import imgDefault from '../../assets/img/image-course-default.png'

function CourseCard({ name, image, year, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clase, setClase] = useState('course-card-name');

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    setClase(clase === 'course-card-name' ? 'new-course-card-name' : 'course-card-name');
  };
  return (
    <div className="CourseCard">
      <div className="course-card-image">
        <img src={image === "" || image === null ? imgDefault : image} alt="" />
        <p>{year}</p>
      </div>
      <div className={clase} onClick={handleCardClick}>
        <h5>{name}</h5>
        <div className={`card-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <p>{description}</p>
        </div>
      </div>
    </div >
  );
}

export default CourseCard;
