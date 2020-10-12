import React from "react";
import "./HomePage.scss";
import Logo from "../../shared/assets/images/logo.png";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <Link to="/carousel">
            <div className="c-homepage-container">
                <h2 className="c-homepage-container__title">Applergic</h2>
                <h4 className="c-homepage-container__subtitle">
                    Mi guía alimentaria
                </h4>
                <img src={Logo} className="c-homepage-container__logo" alt="" />
            </div>
        </Link>

    );
}
