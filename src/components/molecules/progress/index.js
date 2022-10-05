import React from "react";
import './style.css';

function Progress() {
    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div className="progress-bar-percent" style={{ width: '80%' }}>
                    <div className="bar-percent" />
                </div>
            </div>
            <p className="progress-bar-text">80%</p>
        </div>
    );
}

export default Progress;