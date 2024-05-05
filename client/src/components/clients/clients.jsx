import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./clients.module.css";
import Slider from 'react-slick';
import aprendiz1 from '../../assets/galeria/aprendiz1.jpg';
import aprendiz2 from '../../assets/galeria/aprendiz2.jpg';
import aprendiz3 from '../../assets/galeria/aprendiz3.jpg';
import aprendiz4 from '../../assets/galeria/aprendiz4.jpg';

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <div className={style.container}>

                <div id="clients" className={style.title}>
                    <h2>Nuestros Clientes!</h2>
                </div>
                <div className={style.sliderContainer}>

                    <Slider {...settings}>
                        <div>
                            <img src={aprendiz1} alt="" />
                        </div>
                        <div>
                            <img src={aprendiz2} alt="" />
                        </div>
                        <div>
                            <img src={aprendiz3} alt="" />
                        </div>
                        <div>
                            <img src={aprendiz4} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Clients;