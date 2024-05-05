import React, {forwardRef} from "react";
import style from "./about.module.css";


const About = () => {
    return (
        <div className={style.MainContainer}>
            <h2>Nosotros</h2>
            <div className={style.BlockContainer}>
                <div id="about" className={style.TextBlock} >
                    <p>
                        En MyCook contamos con una gran cartilla de Chefs renombrados, con alto impacto dentro de sus cocinas y siempre predispuestos a enseñarle al resto todo lo que saben, ademas de contar con grandes chefs de alrededor del mundo contamos con un plan de estudios hibrido para poder brindarte tus lecciones sea donde sea que estes en el planeta.
                    </p>
                    <p>
                        Ademas en MyCook tenemos una excelentisima variedad de instalaciones en las cuales hacer tus entrenamietnos si decides proceder con tu carrera profesional en el rubro gastronomico, contamos con varias sucursales a lo largo de diversos paises, y muchas mas prontas a abrir.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;