import React from "react";
import { Link } from "react-router-dom";
import "./RegisterDonePage.scss";

export default function RegisterDonePage() {
    return (
        <div className="page">
            <div className="top-links">
                <h5 className="top-links__volver"> &#60; Volver</h5>
                <h5 className="top-links__counter">4 de 4</h5>
            </div>
            <div className="page__img">
                <img
                    src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/2EA1ED25-425A-479C-B1BA-6F62452634CD.png"
                    alt=""
                />
            </div>
            <div className="page page__p">
                <p>Hemos terminado, ya puedes escanear tu primer producto.</p>
            </div>

            <button className="b-main-buttons-blue b-main-buttons button-size ">
                <Link className="b-main-buttons-link" to="/Scanner">
                    Escanea un producto
                </Link>
            </button>
        </div>
    );
}
