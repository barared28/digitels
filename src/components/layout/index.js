import React from "react";
import PropTypes from 'prop-types'
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

Layout.propTypes = {
    children: PropTypes.node,
}

Layout.defaultProps = {
    children: null,
}

export default Layout