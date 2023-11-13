import React from "react";
import '../css/glitch.css';

let GlitchTitle = props => {
    return (
        <div className="glitch" data-text={props.text ? props.text : "PROJK"}>
            {props.text ? props.text : "PROJK"}
        </div>
    );
}

export default GlitchTitle;