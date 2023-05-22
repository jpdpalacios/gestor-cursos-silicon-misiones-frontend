import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CoursesView.css';
import CourseCard from '../CourseCard/CourseCard';

function CoursesView() {
    const [courses, setCourses] = useState([]);

    const API_URL_COURSE = 'http://localhost:8080/api/courses';

    const fetchData = async (apiUrl, setData) => {
        const response = await axios.get(apiUrl);
        setData(response.data);
    };
    useEffect(() => {
        document.title = 'Silicon Miones | Cursos';
        window.scrollTo(0, 0);
        fetchData(API_URL_COURSE, setCourses);
    }, []);
    return (
        <div className="CoursesView">
            <div className="courses-title">
                <h2>Todos los cursos</h2>
            </div>
            <div className="courses-cards">
                {courses.data && courses.data.map((course) => (
                    <CourseCard
                        key={course.id}
                        name={course.nombre}
                        image={course.imagen}
                        year={course.anio}
                        description={course.descripcion}
                    />
                ))}
            </div> 
        </div>
    );
}

export default CoursesView;