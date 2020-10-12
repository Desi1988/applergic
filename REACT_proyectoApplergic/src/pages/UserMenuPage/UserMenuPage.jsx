import React, { useState } from "react";
import "./UserMenuPage.scss";
import menAzul from "../../shared/assets/images/menAzul.png"
import perfil from "../../shared/assets/images/perfil.png";
import favorito from "../../shared/assets/images/favorito.png";
import diario from "../../shared/assets/images/diario.png";
import compartir from "../../shared/assets/images/compartir.png";
import terminos from "../../shared/assets/images/terminos.png";
import salir from "../../shared/assets/images/salir.png";

import diarioMenu from "../../shared/assets/images/diario-menu.png";
import red from "../../shared/assets/images/red-menu.png";
import homeAzul from "../../shared/assets/images/homeAzul.png";
import favoritoMenu from "../../shared/assets/images/favorito-menu.png"

import { Link } from "react-router-dom";

export default function UserMenuPage() {

    const [open, setOpen] = useState(false);
    const checkHamburguer = () => {
        open ? setOpen(false) : setOpen(true);
    }

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }

    return (
        <div>
            <div className="c-header">
                <div className="c-header__menu-hamburguer" onClick={checkHamburguer}>
                    <img className="c-header__hamburguer" src={menAzul} alt="menu boton azul"/>
                </div>
                <nav className="c-header__showMenu">
                    <ul className={open? "c-header__showMenu":"hidden"}>
                        <Link to="user-profile"><li><img className="c-header__iconMenu" src={perfil} alt=""/></li></Link>
                        <Link to="rate-page"><li><img className="c-header__iconMenu" src={favorito} alt=""/></li></Link>
                        <Link to="diary"><li><img className="c-header__iconMenu" src={diario} alt=""/></li></Link>
                        <li><img className="c-header__iconMenu" src={compartir} alt=""/></li>
                        <li><img className="c-header__iconMenu" src={terminos} alt=""/></li>
                        <li><img className="c-header__iconMenu" src={salir} alt="" onClick={logOut}/></li>
                    </ul>
                </nav>
            </div>
            <div className="c-logo">
                <img className="c-logo__backGroundImg"
                     src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/97781A83-1D0E-4618-BF79-141124D3A776.png"
                     alt="logo applergic" />
            </div>
            <div>
                <nav className="c-userMenu">
                    <a className="b-main-button b-main-button__blue" href="/scanner">Escanear
                        {/*<button className="b-main-button b-main-button__blue" type="submit" >Escanear</button>*/}
                    </a>
                    <p className="c-userMenu__p">Escanea un nuevo producto</p>
                    <button type="submit" className="b-main-button b-main-button__gray">Buscar</button>
                    <p className="c-userMenu__p">Busca un comercio o restaurante para tí.</p>
                    <button type="submit" className="b-main-button b-main-button__red">S.O.S</button>
                    <p className="c-userMenu__p">¿Necesitas ayuda urgente? contactamos con emergencias.</p>
                </nav>
            </div>
            <footer>
                <ul className="menu-bottons">
                    <Link to="/login"><li><img className="menu-bottons__icon" src={homeAzul} alt="span casa azul"/></li></Link>
                    <Link to="/rate-page"><li><img className="menu-bottons__icon" src={favoritoMenu} alt="span favorito"/></li></Link>
                    <Link to="/diary"><li><img className="menu-bottons__icon" src={diarioMenu} alt="span diario"/></li></Link>
                    <li><img className="menu-bottons__icon" src={red} alt="span compartir"/></li>
                </ul>
            </footer>
        </div>
    );
}

