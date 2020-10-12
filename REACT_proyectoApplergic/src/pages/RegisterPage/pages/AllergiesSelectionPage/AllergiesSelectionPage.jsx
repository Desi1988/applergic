import React, { useEffect, useState } from "react";
import { API } from "../../../../shared/services/api";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../../shared/components/ButtonComponent/ButtonComponent";
import './AllergiesSelectionPage.scss';

export default function AllergiesSelectionPage() {
    const [allergies, setAllergies] = useState([]);
    let arrOfAllergies = [];
    let allergiesInitials = ["A", "C", "F", "G", "H", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "Y"];

    useEffect(() => {
        API.get("/alergias")
            .then((res) => {
            setAllergies(res.data);
            /*window.location.href = "/register-confirmation";*/
        });
    }, []);

    const saveAllergyInfo = (allergyID, name) => {
        let allergyObjectInfo = {
            nombre: name,
            id: allergyID
        };
        arrOfAllergies.push(allergyObjectInfo);
    }

    return (
        <div className="c-allergies-container">
            <div className="top-links-allergies">
                <Link to="/register-contact"><h5 className="top-links-allergies__volver"> &#60; Volver</h5></Link>
                <h5 className="top-links-allergies__counter"> 3 de 4</h5>
            </div>
            <h2 className="c-allergies-container__title">
                Ahora selecciona tus alergias e intolerancias.
            </h2>
            <h3 className="c-allergies-container__subtitle">
                Los elementos marcados serán identificados en tus búsquedas como peligrosos para ti.
            </h3>
            <div className="c-allergies-container__alphabet-grid">
                {allergiesInitials.map((allergyInitial, i) =>
                        <a key={i} href={'#' + allergyInitial}>
                            <button key={i} className="b-allergy-letter b-allergy-letter-gray">{allergyInitial}</button>
                        </a>
                )}
            </div>
            <div className="c-allergies-container__display">
                {allergiesInitials.map((letter, i) => (
                    <div key={i} className="c-allergies-container__display-letters">
                        <button id={letter} className="b-allergy-letter b-allergy-letter-gray btn">{letter}</button>
                        <div className="c-allergies-container__display-letters-elements">
                            {allergies.filter(allergy => allergy.nombre.startsWith(letter)).map((allergy, i) =>
                                (<ButtonComponent key={i} id={i} allergyName={allergy.nombre}
                                                  fnSaveAllergyInfo={saveAllergyInfo} allergyID={allergy._id}/>))
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className="continue-btn">
                <Link to={{
                    pathname: "/register-confirmation",
                    state: {arr: arrOfAllergies}
                }}>
                    <button className="b-main-button b-main-button-blue">Continuar</button>
                </Link>
            </div>
        </div>
    )
}
