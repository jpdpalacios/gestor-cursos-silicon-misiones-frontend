import React, { useEffect, useState } from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import CourseCard from "../CourseCard/CourseCard";
import './Home.css';
import image1 from "../../assets/img/image-home-banner.jpg"
import { Link } from "react-router-dom";
import axios from 'axios';


function Home() {
    const [courses, setCourses] = useState([]);

    const API_URL_COURSE = 'http://localhost:8080/api/courses';

    const fetchData = async (apiUrl, setData) => {
        const response = await axios.get(apiUrl);
        setData(response.data);
    };
    useEffect(() => {
        document.title = 'Silicon Miones | Inicio';
        fetchData(API_URL_COURSE, setCourses);
    }, []);
    const words = ["inovación", "crecimiento", "el futuro", "esfuerzo", "trabajo"];
    return (
        <div className="Home">
            <div className="home-banner">
                <div className="home-banner-text">
                    <TypingEffect words={words} />
                </div>
                <div className="home-banner-image">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="home-presentation">
                <h2>Bienvenido a la plataforma de gestión de cursos de Silicon Misiones</h2>
                <h3>"Creando talento IT en el nordeste Argentino"</h3>
            </div>
            <div className="home-last-courses">
                <div className="home-last-courses-title">
                    <h4>Ultimos lanzamientos</h4>
                </div>
                <div className="home-last-courses-cards">
                    {courses.data && courses.data.slice(-4).map((course) => (
                        <CourseCard
                            key={course.id}
                            name={course.nombre}
                            image={course.imagen}
                            year={course.anio}
                            description={course.descripcion}
                        />
                    ))}
                </div>
                <Link to="/cursos">
                    <button>Ver más</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
