import React, { useState } from "react";
import ScanComponent from "./components/ScanComponent";
import "./ScanPage.scss";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";

export default function ScanPage() {
    const [producto, setProducto] = useState({});

    const llamadaApi = (data) => {
        API.get('productos/'+ data).then(res => {
            const productoEscaneado = res.data;
            setProducto(productoEscaneado)
        })
    }

    return (
        <div className="c-page">
            <Link to="user-menu">
      <span>
        <img
            className="c-page__cross"
            src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/A295147C-89FB-4DFD-B4FF-A062176B1DA6.png"
            alt=""
        />
      </span>
            </Link>
            <div className="c-page__text">
                <h4>Escaneando...</h4>
                <p className="c-page__text-p">
                    Tan solo tienes que centrar el <strong>QR</strong> del
                    producto en el recuadro
                </p>
            </div>
            <div>
                <ScanComponent className=" c-page__scan" fnLlamadaApi={llamadaApi} producto={producto.nombre}/>
                <Link to={{
                    pathname: "/scanresult",
                    state: {arr: producto}
                }}>
                    <button className="b-main-button b-main-button-blue">Ver resultado</button>
                </Link>
            </div>
        </div>
    );
}
