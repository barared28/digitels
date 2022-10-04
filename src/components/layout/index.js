import React from "react";
import logo from '../../assets/logo.svg'
import './style.css';

function Layout({ children }) {
    return (
        <div className="container-layout">
            <div className="container-layout-logo">
                <img src={logo} className="logo-img" alt="logo" />
            </div>
            <div className="container-wrapper">
                {children}
            </div>
        </div>
    );
}

export default Layout