import React, { useState, useEffect } from "react";
import "./DiaryPage.scss";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";
import DiaryItem from "./DiaryItem/DiaryItem";
/*import domtoimage from 'dom-to-image';*/
import cross from '../../shared/assets/images/cross.png';
/*import jsPDF from 'jspdf';*/

export default function DiaryPage() {
    const [diarioProd, setDiarioProd] = useState([]);


    //en la base de datos le he quitado la autentificación. Hace la llamada a la API (en la consola sale tomate solís)
    useEffect(() => {
        API.get("diario/")
            .then((res) => {
            const productoDiario = res.data;
            setDiarioProd(productoDiario);
                console.log(res);
            });
    }, []);

    const deleteDiarioProd = (index) => {
        const productoDiario = [...diarioProd];
        productoDiario.splice(index, 1);
        setDiarioProd(productoDiario);
    }
    /*const generatePdf = () => {
            const input = document.getElementById('c-diary-component');
            const pdf = new jsPDF();
            if (pdf) {
                domtoimage.toPng(input)
                    .then(imgData => {
                        pdf.addImage(imgData, 'PNG', 10, 10);
                        pdf.save('informe.pdf');
                    });
            }
        }*/

    return (
        <div className="c-diary-component" id="c-diary-component">
            <Link to="/scanner">
        <span>
          <img
              className="c-diary-component__cross"
              src={cross}
              alt=""
          />
        </span>
            </Link>
            <h3 className="c-diary-component__title">
                ¿Incluimos la seleción en tu Diario?
            </h3>
            <h4 className="c-diary-component__subtitle">
                Añade tus comentarios para completar tu información
            </h4>
            <div className="c-diary-component__products-container">
                {diarioProd.map((item, index) =>
                    <DiaryItem  diarioProd={item} fnDeleteDiarioProd={deleteDiarioProd} index={index} key={index}  />)}
            </div>
            <div className="c-diary-component__footer">
                <Link to="/user-menu">
                    <button className="c-diary-component__footer-button" /*onClick={generatePdf()}*/>Ir al menú</button>
                </Link>
            </div>
        </div>
    );
}
