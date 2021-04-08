import React from "react";

let InvisibleCard = props => {
    let className = props.className + props.right ? " right" : " left";
    let col = props.col ? props.col : 6;

    return (
        <div className={"invisible-card d-flex p-4 col-" + col}>
            <div className={className}>
                {props.children}
            </div>
        </div>
    );
}

export default InvisibleCard;