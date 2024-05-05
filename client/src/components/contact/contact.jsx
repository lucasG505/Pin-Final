import React, { useEffect, useState } from "react";
import style from "./contact.module.css";
import contact from "../../assets/galeria/contact.jpg";
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ formData });
        //accedo a la ruta del back y creo la consulta
        try {
            const response = await axios.post('http://localhost:8000/api/createConsulta', formData);

            console.log(response.data);
        } catch (error) {
            //si sale mal, aviso al usuario
            setError(error.response.data.message);
        }
    }

    return (
        <>
            <div id="contact" className={style.container}>
                <div className={style.title}>
                    <h2>Consultanos tus dudas!</h2>
                </div>
                <div className={style.content}>

                    <div className={style.formContainer}>
                        {error && (<p className={style.error}>ERROR: "{error}"". NO SE PUDO GENERAR LA CONSULTA</p>)}
                        <form className={style.formContact} onSubmit={handleSubmit}>
                            <div className={style.formInput}>
                                <label htmlFor="name">Nombre:
                                </label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                            </div>
                            <div className={style.formInput}>
                                <label htmlFor="phone">Telefono:
                                </label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                            </div>
                            <div className={style.formInput}>
                                <label htmlFor="email">Email:
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                            </div>
                            <div className={style.formInput}>
                                <label htmlFor="message">Message:
                                </label>
                                <textarea type="text" id="message" name="message" value={formData.message} onChange={handleChange} required />

                            </div>
                            <button type="submit" >Send</button>
                        </form>
                    </div>
                    <div className={style.imageContainer}>
                        <img src={contact} alt="chef" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;