import style from "./home.module.css"
import React from "react"

const Home = () => {
    const scrollToSection = () => {
        const goTo = document.getElementById("home");

        if (goTo) {
            goTo.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <>
            <div className={style.mainContainer}>
                <h1>Bienvenido al mundo culinario!</h1>
                <p>Aprende sobre los mas interesantes prodcutos de cocina, como utilizarlos y recetas nunca jamas vistas.</p>
                <button onClick={scrollToSection} >Learn more</button>
            </div>
            <div id="home" className={style.info} >
                <h2>Te ayudamos a crecer!</h2>
                <p>En este hermoso curso culinario aprenderas sobre los mas llamativos ingredientes de diversas culturas, contamos con un gran abanico de lugares de los que aprender. Desde cocina exotica hasta cocina tradicional, aqui podras encontrar un curso que se adapte a tu nivel de cocina y apuntamos a enseñarles a todos sin importar su edad, genero u estatus economico. Adentrate en una ventura de sabor y como dice Gusteau "cualquiera puede ser un gran cocinero".</p>
            </div>
        </>
    )
}

export default Home;