import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "../../shared/styles/blocks/primereact-carousel-block.scss";
import "./CarouselPage.scss";
import { Link } from "react-router-dom";


export default function CarouselPage() {
    const [carousel] = useState([
        {
            img: "https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/78FDA71E-E153-419C-B400-80E4BC161C22.png",
            title: "¡Bienvenido a Applergic!",
            desc:
                "Escanea el código de barras de tu producto y Applergic te  dirá si es apto para ti.",
        },
        {
            img: "https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/BB3D4B7E-0DF0-4E24-816C-25D1750083DE.png",
            desc: "LLeva tu Diario de compras y actividades.",
        },
        {
            img: "https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/F7D4B0B1-1E5B-421B-A93E-B469322B311C.png",
            desc:
                "En caso de emergencia nos pondremos en contacto con la persona que nos digas.",
        },
        {
            img: "https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/A2367D3F-2BF7-49D6-8C43-9F02C8F380B4.png",
            desc:
                "Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergias e intolerancias traducido al idioma local.",
        },
    ]);

    const itemTemplate = (car) => {
        return <div>
            <img src={car.img} alt=""/>
            <p className="title">{car.title}</p>
            <p className="lines">{car.desc}</p>

        </div>
    };

    return (
        <div className="font carousel">
            <div className="logo">
                <img className="logo__logo" src="https://cdn.zeplin.io/5e2a11b5ca786f8064774510/assets/1CD358C0-B280-46E5-8361-5C791F441F8A.png" alt=""/>
            </div>
            <Carousel className="b-primereact-carousel" value={carousel} itemTemplate={itemTemplate}></Carousel>
            <span className="span-saltar">
                <Link className="span-saltar text" to="/login">Saltar</Link>
            </span>
        </div>
    );
}
