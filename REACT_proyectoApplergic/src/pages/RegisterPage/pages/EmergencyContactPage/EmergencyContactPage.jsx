import React from 'react'
import './EmergencyContactPage.scss';
import { useForm } from "react-hook-form";
import { API } from '../../../../shared/services/api';
import { Link } from 'react-router-dom';

export default function EmergencyContactPage() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        API.put('usuarios', {contactoEmergencia: data})
            .then(res => {
            window.location.href = "/register-allergies";
            console.log(res)
        })
    };

    return (
        <div>
            <div className="top-links-emergency">
                <Link to="/register"><h5 className="top-links-emergency__volver"> &#60; Volver</h5></Link>
                <h5 className="top-links-emergency__counter">2 de 4</h5>
            </div>
            <div className="c-title">
                <h2>Vamos a añadir tu <br/>contacto en caso de <br/> emergencia</h2>
                <p>Nos pondremos en contacto con tu persona de confianza en caso de emergencia.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="c-registerForm">
                <label htmlFor="name">
                    <input type="text" className="c-registerForm__inputName" name="nombreCompleto" id="name" placeholder="Nombre completo"
                           ref={register ({ required: true })} />
                           {errors.nombreCompleto && <span className="c-registerForm__span"> El campo nombre completo es requerido</span>}
                </label>
                <label htmlFor="email">
                    <input type="email" className="c-registerForm__inputEmail" name="email" id="email" placeholder="Dirección email"
                           ref={register ({ required: true })} />
                           {errors.email && <span className="c-registerForm__span"> El campo email es requerido</span>}
                </label>
                <label htmlFor="movil">
                    <input type="text" className="c-registerForm__inputMovile" name="movil" id="movil" placeholder="Teléfono móvil"
                           ref={register ({ required: true })} />
                           {errors.movil && <span className="c-registerForm__span"> El campo móvil es requerido</span>}
                </label>
                <button className="b-main-button b-main-button__blue">Guardar Emergencias</button>
            </form>
            <footer className="c-footer">
                <Link to="/" className="c-footer__backEmergencies">Registraré mi contacto en otro momento</Link>
            </footer>
        </div>
    )
}
