import classNames from "classnames";
import React from "react";
import "./index.scss";

const Button = ({
    onClick,
    label,
    classname="",
    activeGreen,
    disabled=false
}) => {

    return (
        <>
            <button
                onClick={onClick}
                className={classNames("reeco-btn", classname, activeGreen ? "reeco-green-btn" : "reeco-trans-btn")}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default Button;