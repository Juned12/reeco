import React from "react";
import {cart} from "../../assets/images"
import "./index.scss"

const Navbar = () => {

    return (
        <>
            <nav className="navbar ps-5 pe-5 reco-navbar">
                <div className="d-flex align-items-center">
                    <span className="reeco-brand ps-5">Reeco</span>
                    <span className="nav-option ps-5">Store</span>
                    <span className="nav-option ps-5">Orders</span>
                    <span className="nav-option ps-5">Analytics</span>
                </div>
                <div className="d-flex align-items-center pe-5">
                    <img src={cart} alt="" className="pe-3"/>
                    <div>
                        Hello, James
                    </div>
                    <i className="bi bi-caret-down"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;