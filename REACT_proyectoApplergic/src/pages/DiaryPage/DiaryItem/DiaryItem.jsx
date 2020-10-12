import React, { useState } from "react";
import { API } from "../../../shared/services/api";
import "./DiaryItem.scss";
import edit from '../../../shared/assets/images/edit.png';
import cross from '../../../shared/assets/images/cross.png';

export default function DiaryItem(props) {
    const diarioProd = props.diarioProd;
    const [noteName, setNoteName] = useState();

    console.log(diarioProd._id);
    //papa esto es donde se ha clicado, mandar index

    const putNotas = () => {
        console.log(noteName);

        API.put("diario/" + diarioProd._id, { notas: noteName })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div>
                <div key={props.index} className="c-diaryItem">
                    <div className="c-diaryItem__img">
                        <img
                            className="c-diaryItem__img-img"
                            src={diarioProd.imagen}
                            alt=""
                        />
                    </div>
                    <div className="c-diaryItem__info">
                        <p>{new Date(diarioProd.fecha).toLocaleDateString()}</p>
                        <p>{diarioProd.nombreProducto}</p>
                        <input className="c-diaryItem__info-input"
                               onChange={($event) => {
                                   setNoteName($event.target.value);
                               }}
                               type="text"
                               id="notas"
                        />
                    </div>
                    <div className="c-diaryItem__spans">
            <span>
              <img
                  className="c-diaryItem__spans-A" alt=""
                  src={cross}
                  onClick={() => {
                      props.fnDeleteDiarioProd(props.index);
                  }}
              />
            </span>
                        <span onClick={putNotas}>
              <img
                  className="c-diaryItem__spans-B" alt=""
                  src={edit}/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
