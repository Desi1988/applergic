import React from 'react'
import './InformPage.scss'

export default function InformPage() {
    return (
        <div>
            <div className="c-inform-component">
                <div className="top-links">
                    <h5 className="top-links__volver"> &#60; Volver</h5>
                </div>
                <h3 className="c-inform-component__title">
                    Este es el informe basado en tu Diario.
                </h3>
                <h4 className="c-inform-component__subtitle">
                    Actividad del mes de noviembre de 2020.
                </h4>
                <div className="c-inform-component__inform-container">

                </div>
                <div className="c-inform-component__footer">
                    <button className="b-main-button b-main-button-blue">Guardar en pdf</button>
                    <div><a href="#" className="c-inform-component__inform-link">Ir a informe siguiente</a></div>
                </div>
            </div>

        </div>
    )
}
