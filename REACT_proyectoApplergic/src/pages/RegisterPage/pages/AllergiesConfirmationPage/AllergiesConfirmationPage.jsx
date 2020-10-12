import React from 'react';
import './AllergiesConfirmationPage.scss';
import {Link} from "react-router-dom";
import {API} from "../../../../shared/services/api";

export default function AllergiesSelectionPage(props) {

    const landingAllergies = props.location.state.arr;

    let allergiesIDs = [];
    landingAllergies.map((id) => allergiesIDs.push(id.id));

    const putAllergies = () => {
       API.put('usuarios', {alimentos: allergiesIDs})
           .then(res => {
              console.log(res)
               window.location.href = "/user-menu";
           })
           .catch((err) => {
               console.log(err)
           })
    }

    return(
        <div className="c-allergies-confirmation-container">
            <div className="top-links-allergies">
                <Link to="/register-allergies"><h5 className="top-links-allergies__volver"> &#60; Volver</h5></Link>
                <h5 className="top-links-allergies__counter">4 de 4</h5>
            </div>
            <h2 className="c-allergies-confirmation-container__title">
                Confirma tu selección.
            </h2>
            <h3 className="c-allergies-confirmation-container__subtitle">
                A continuación te resumimos los alimentos registrados como peligrosos para ti.
            </h3>
            <div className="c-allergies-confirmation-container__prev-selected">
                {landingAllergies.length? landingAllergies.map((allergy, i) =>
                        <button key={i} className="b-allergy-element b-allergy-element-warmpink">{allergy.nombre}</button>):
                    <p className="c-allergies-confirmation-container__prev-selected__no-selection">
                        Usted no ha seleccionado ningún alimento.
                    </p>
                }
            </div>
            <div className="c-allergies-confirmation-container__confirmation-btn">
                <button className="b-main-button b-main-button-blue" onClick={putAllergies}>Confirmar</button>
            </div>
        </div>
    )
}
