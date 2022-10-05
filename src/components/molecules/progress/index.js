import React from "react";
import './style.css';

function Progress() {
    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div className="progress-bar-percent" />
            </div>
            <p className="progress-bar-text">80%</p>
        </div>
    );
}

export default Progress;