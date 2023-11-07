
import React from "react";
import classNames from "classnames";
import "./index.scss"
 
const Modal = ({ 
    isOpen, 
    onClose, 
    children,
    className,
    title
}) => {
        

    if (!isOpen) return null;
 
    return (
        <div
            onClick={onClose}
            className={classNames("modal-outer-wrap", className)}
        >
            <div className={classNames("modal-wrap", className)}>
                <div className="d-flex justify-content-between">
                    <div className="fw-bold">{title}</div>
                    <i className="fa fa-times pointer" aria-hidden="true" onClick={onClose}></i>
                </div>

                {children}
            </div>
        </div>
    );
};
 
export default Modal;   