import React, {useEffect, useState} from "react";
import {API} from "../../shared/services/api";
import "./UserProfilePage.scss";
import {Link} from "react-router-dom";

export default function UserProfilePage() {

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        API.get('usuarios/singleUser')
            .then((res) => {
                setUserInfo(res.data);
                console.log(res.data)
            })
    }, [])

    return (
        <div className="c-userprofile">
            <div className="top-links__userprofile">
                <Link to="/user-menu"><h5 className="top-links__userprofile__volver"> &#60; Volver</h5></Link>
            </div>
            <img className="c-userprofile__img" src={require("./../../shared/assets/images/logo-circulo.png")} alt=""/>
            <h3 className="c-userprofile__title">Datos de usuario</h3>
            <div className="c-userprofile__datos">
                <h1 className="c-userprofile__nombre"><div className="c-userprofile__label">Nombre: </div>{userInfo.nombreCompleto}</h1>
                <h1 className="c-userprofile__email"><div className="c-userprofile__label">Email:</div>{userInfo.email}</h1>
                <h1 className="c-userprofile__contacto"><div className="c-userprofile__label">Contacto:</div>{userInfo.contact}</h1>
            </div>
        </div>
    );
}
