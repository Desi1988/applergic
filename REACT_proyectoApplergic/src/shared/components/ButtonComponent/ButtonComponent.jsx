import React, {useState} from 'react';

export default function ButtonComponent(props) {

    const [btnIsActive, setBtnIsActive] = useState(false);

    const handleClick = () => {
        props.fnSaveAllergyInfo(props.allergyID, props.allergyName);
        btnIsActive ? setBtnIsActive(false) : setBtnIsActive(true);
    }

    return(
        <div>
            <button id={props.id} className={btnIsActive ? "b-allergy-element b-allergy-element-warmpink" : "b-allergy-element b-allergy-element-gray"}
                    onClick={() => {handleClick()}}>
                {props.allergyName}
            </button>
        </div>
    )
}
