import React from "react";

import "./RatePage.scss";

export default function RatePage() {
    return (
        <div>
            <div className="rate-page-container">
                <div className="top-links-ratepage">
                <h5 className="top-links-ratepage__volver"> &#60; Volver</h5>
                </div>
                <img className="rate-page-container__img"
                    src={require("../../shared/assets/images/logo-circulo.png")} alt=""/>

                <h3 className="rate-page-container__text">
                    ¡Gracias por usar Applergic!
                </h3>
                <h3 className="rate-page-container__subtitle">
                    Por favor, evalua tu experiencia.
                </h3>
                <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
                <a href="/user-menu" className="rate-page-container__suggestions">Enviar Sugerencias</a>
            </div>
        </div>
    );
}
