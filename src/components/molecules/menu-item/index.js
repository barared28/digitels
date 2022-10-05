import React from "react";
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import './style.css';

function MenuItem() {
    return (
        <div>
            <button className="menu-button">
                <MenuIcon />
            </button>
        </div>
    );
}

export default MenuItem;