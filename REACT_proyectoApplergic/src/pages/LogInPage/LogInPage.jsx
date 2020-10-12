import React from 'react'
import './LogInPage.scss';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { API } from '../../shared/services/api';

export default function LogInPage() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        API.post('usuarios/login', data).then(res => {
            localStorage.setItem('token', res.data.token);
            if (res.data.logged) {
                window.location.href = "/user-menu"
            }
        })
            .catch((error) => {
                alert('Los campos son incorrectos.')
            })
    };

    return (
        <div>
            <div className="c-backgroundImg">
            </div>
            <div className="c-title">
                <h2>!Bienvenido de nuevo!</h2>
                <p>Por favor, introduce tus datos para continuar</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="c-registerForm">
                <label htmlFor="email">
                    <input type="email" className="c-registerForm__inputEmail" name="email" id="email"
                           placeholder="Dirección email"
                           ref={register({ required: true/*, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ */})} />
                           {errors.email && <span className="c-registerForm__span">El campo email es requerido</span>}
                </label>
                <label htmlFor="password">
                    <input type="password" className="c-registerForm__inputPassword" name="password"
                           id="password" placeholder="Password"
                           ref={register({ required: true/*, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/*/ })} />
                           {errors.password && <span className="c-registerForm__span">El campo password es requerido</span>}
                </label>
                <button type="submit" className="b-main-button b-main-button__blue">Entrar</button>
            </form>
            <footer className="c-footer">
                <p className="c-footer__p">¿Nuevo en Applergic?</p>
                <Link to="/register" className="c-footer__link">Crea tu cuenta aquí</Link>
                <Link to="/" className="c-footer__backHome">Me registraré en otro momento</Link>
            </footer>
        </div>
    )
}
