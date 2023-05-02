import React, { useEffect } from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import './Home.css';
import image1 from "../../assets/img/image-home-banner.jpg"

function Home() {
    useEffect(() => {
        document.title = 'Silicon Miones | Inicio';
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
                
                </div>
            </div>
        </div>
    );
}

export default Home;
