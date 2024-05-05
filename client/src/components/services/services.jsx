import React, { useState } from "react";
import style from "./services.module.css";
import chef from '../../assets/galeria/chef-intenacional.jpg';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <>
            <div className={style.container}>
                <div id="services" className={style.acordeon}>
                    <div className={style.acordeonItem} id="option1">
                        <div className={style.acordeonTitle} onClick={() => toggleAccordion("option1")}><h3>Gastronomia del hogar</h3></div>
                        {activeIndex === "option1" && (
                            <div className={style.acordeonContent}>
                                <p>En este curso podras aprender desde cero todos los fundamentos basicos para ser un amsterchef en la cocina de tu hogar. Desde crear dietas balanceadas y saludables, hasta crear tus propias recetas basadas en buenos habitos del comer. Todas llavadas a cabo por consejos de grandes maestros de la cocina cotidana.</p>
                            </div>
                        )}
                    </div>
                    <div className={style.acordeonItem} id="option2">
                        <div className={style.acordeonTitle} onClick={() => toggleAccordion("option2")}><h3>Chefs amateurs</h3></div>
                        {activeIndex === "option2" && (
                            <div className={style.acordeonContent}>
                                <p>Para chefs mas avanzados que buscan perfeccionar sus tecnicas culinarias dentro de un restaurante de verdad, esta es la mejor opcion. Brindamos una super completa experiencia de cocina en un verdadero restaurante donde podras aprender de chefs galardonados y descubrir nuevos metodos de cocina experimentales.</p>
                            </div>
                        )}
                    </div>
                    <div className={style.acordeonItem} id="option3">
                        <div className={style.acordeonTitle} onClick={() => toggleAccordion("option3")}><h3>Gastronomia del Mundo</h3></div>
                        {activeIndex === "option3" && (
                            <div className={style.acordeonContent}>
                                <p>En este curso podras seleccionar entre varias culturas para aprender sobre su gastronomia, desde oriental hasta occidental, este curso es mas orientado sobre una variedad especifica de platillos que aprenderas a hacer desde cero por lo cual no necesitas experiencia previa. Se recomienda para aprendices como para expertos que quieran refinar sus platillos.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <img src={chef} alt="chef" />
                </div>
            </div>
        </>
    )
}

export default Services;