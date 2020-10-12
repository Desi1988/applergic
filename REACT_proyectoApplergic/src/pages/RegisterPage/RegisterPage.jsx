import React , {useRef, useState} from 'react';
import './RegisterPage.scss';
import { useForm } from "react-hook-form";
import { API } from '../../shared/services/api';
import cMaraAzul from '../../shared/assets/images/cMaraAzul.png';
import {Link} from 'react-router-dom';

export default function RegisterPage(/*props*/) {
    const { register, handleSubmit, errors } = useForm();
    const refForm =  useRef(null);
    const [profImage, setProfImage] =  useState(null)

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData(refForm.current);

        API.post('usuarios', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            window.location.href = "/register-contact";
        })
    };

    return (
        <div>
            <div className="top-links-register">
                <Link to="./login"><h5 className="top-links-register__volver"> &#60; Volver</h5></Link>
                <h5 className="top-links-register__counter">1 de 4</h5>
            </div>
            <div className="c-title">
                <h2>Dinos quién eres.</h2>
            </div>
            <form action="/usuarios/profileImage" method="post" encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)} className="c-registerForm" ref={refForm}>
                <label htmlFor="image" >
                    <div className="c-profile">
                        {!profImage && <img className="c-profile__photo" src={cMaraAzul} alt="imagen default"/>}
                        {profImage && <img className="c-profile__photo" src={profImage} alt="imagen default"/>}
                    </div>
                    <input type="file" className="c-upload"  name="foto" id="file" alt=""  ref={register}
                           onChange={(e) => setProfImage(URL.createObjectURL(e.target.files[0]))} hidden />
                    <label htmlFor="file" className="c-upload">Subir foto</label>
                </label>
                <label htmlFor="name">
                    <input type="text" className="c-registerForm__inputName" name="nombreCompleto" id="name" placeholder="Nombre completo"
                           ref={register ({ required: true })} />
                           {errors.nombreCompleto && <span className="c-registerForm__span"> El campo nombre completo es requerido</span>}
                </label>

                <label htmlFor="email">
                    <input type="text" className="c-registerForm__inputEmail" name="email" id="email" placeholder="Dirección email"
                           ref={register ({ required: true })} />
                           {errors.email && <span className="c-registerForm__span">El campo e-mail es requerido</span>}
                </label>
                <label htmlFor="movile">
                    <input type="text" className="c-registerForm__inputMovile" name="contact" id="movile" placeholder="Movil"
                           ref={register ({ required: true })} />
                            {errors.contact && <span className="c-registerForm__span">El campo contacto es requerido</span>}
                </label>
                <label htmlFor="password">
                    <input type="password" className="c-registerForm__inputPassword" name="password" id="password" placeholder="Password"
                           ref={register ({ required: true })} />
                            {errors.password && <span className="c-registerForm__span">El campo password es requerido</span>}
                </label>
                <button className="b-main-button b-main-button__blue">Guardar Perfil</button>
            </form>
        </div>
    )
}
