import React from "react";
import './style.css'

function Tag({ text, color }) {
    return (
        <div
            className="tag-box"
            style={{ backgroundColor: `var(--${color}-bg)`, border: `1px solid var(--${color}-border)` }}
        >
            <p style={{ color: `var(--${color})` }}>
                {text}
            </p>
        </div>
    );
}

export default Tag;