import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "./ScanComponent.scss";


export default function ScanComponent (props) {
    const [state, setState] = useState([])

    console.log(state)
    const handleScan = data => {
        if (data) {
            setState({
                data
            })
            props.fnLlamadaApi(data)
        }
    }

    const handleError = err => {
        console.error(err)
    }

    const previewStyle = {
        height: 0,
        width: 250,
    };
    return(
        <div className="c-scan">
            <QrReader
                delay={300}
                onError={handleError}
                style={previewStyle}
                onScan={handleScan}
                className="c-scan__container c-scan"
            />
            {/*<p className="c-scan__p">{state.data}</p>*/}
            <p> Nombre: {props.producto}</p>
        </div>
    )
}
