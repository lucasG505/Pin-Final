import iconCook from "../../assets/icons/cocina.png"
import style from "./navbar.module.css"

const NavBar = () => {
    


    return (
        <>
            <nav className={style.nav}>
                <div className={style.IconContainer}>
                    <img className={style.IconCook} src={iconCook} alt="" />
                    <a  href="#home">

                        <h2>MyCook</h2>
                    </a>
                </div>
                <div className={style.DropMenuPhoneContainer}>
                    <ul className={style.OptionsContainer}>
                        <li>
                            <a  className={style.Navbutton} href="#about">
                                <p>About Us</p>
                            </a>
                        </li>

                        <li>
                            <a  className={style.Navbutton}  href="#services">
                                <p>Services</p>
                            </a>
                        </li>

                        <li>
                            <a  className={style.Navbutton}  href="#clients">
                                <p>Clients</p>
                            </a>
                        </li>

                        <li>
                            <a  className={style.Navbutton}  href="#contact">
                                <p>Reach out</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;