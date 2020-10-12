import React, { useEffect, useState } from "react";
import "./ScanResultPage.scss"
import {API} from "../../shared/services/api";
import {Link} from "react-router-dom";
import favoritoMenu from "../../shared/assets/images/favorito-menu.png";
import diarioMenu from "../../shared/assets/images/diario-menu.png";
import red from "../../shared/assets/images/red-menu.png";

export default function ScanResultPage(props) {
    const landingProductos = props.location.state.arr;
    const [alergiasUsuario, setAlergiasUsuario] = useState([]);
    const [esAlergico, setEsAlergico] = useState(false);
    const compatibles = landingProductos.compatibilidad

    /*const userID = localStorage.getItem('userID');*/

    useEffect(() => {
        API.get('usuarios/singleUser' )
            .then((res) => {
                setAlergiasUsuario(res.data.alimentos);
            })
    }, [])

    useEffect(() => {
        compatibles.some(alimento => alergiasUsuario.indexOf(alimento) >= 0) ? setEsAlergico(true) : setEsAlergico(false);
    }, [alergiasUsuario])

    const addtodiary = () => {
        API.post('diario', {
            nombreProducto: landingProductos.nombre,
            imagen: landingProductos.foto
        })
            .then((res) => {
                console.log(res)
            })
    }

    return (
        <div>
            <div className="top-links">
                <Link to="/scanner"><h5 className="top-links__volver"> &#60; Volver</h5></Link>
            </div>
            <span><img className="c-page__cross"
                       src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/A295147C-89FB-4DFD-B4FF-A062176B1DA6.png"
                       alt=""/>
            </span>
            <div className="c-resultspage">
                <h2 className="c-resultspage__title">Aquí tienes el resultado.</h2>
                {esAlergico &&
                <div>
                    <h2 className="c-resultspage__msg"> Este producto NO es apto para ti.</h2>
                    <div className="c-resultspage__main-container">
                    <div className="b-frame__red">
                        <img className="b-img-frame" src={landingProductos.foto} alt=""/>
                    </div>
                    <div className="c-resultspage__links">
                        <Link to="/rate-page"><div className="c-resultspage__container"><img className="c-resultspage__icon" src={favoritoMenu} alt="span favorito"/></div></Link>
                        <div className="c-resultspage__container"><img className="c-resultspage__icon" onClick={addtodiary} src={diarioMenu} alt="span diario"/></div>
                        <div className="c-resultspage__container"><img className="c-resultspage__icon" src={red} alt="span compartir"/></div>
                    </div>
                    </div>
                </div>
                }
                {!esAlergico &&
                    <div>
                        <h2 className="c-resultspage__msg"> Este producto SI es apto para ti.</h2>
                        <div className="c-resultspage__product">
                            <div className="b-frame__green">
                                <img className="b-img-frame" src={landingProductos.foto} alt=""/>
                            </div>
                                <div className="c-resultspage__links">
                                    <Link to="/rate-page"><div className="c-resultspage__container"><img className="c-resultspage__icon" src={favoritoMenu} alt="span favorito"/></div></Link>
                                    <div className="c-resultspage__container"><img className="c-resultspage__icon" onClick={addtodiary} src={diarioMenu} alt="span diario"/></div>
                                    <div className="c-resultspage__container"><img className="c-resultspage__icon" src={red} alt="span compartir"/></div>
                            </div>
                        </div>
                    </div>
                }
                <div>
                    <h3 className="c-resultspage__nombre">{landingProductos.nombre} - {landingProductos.marca} </h3>
                    <p className="c-resultspage__ingredientes">Ingredientes:{landingProductos.ingredientes}</p>
                </div>

                <Link to="/scanner">
                    <button className="b-main-button b-main-button-blue">Escanea otro producto</button>
                </Link>
            </div>
        </div>
    )
}
