import React from "react";
import './style.css';

function ItemEmpty() {
    return (
        <div className="item-box">
            <p className="font-medium item-text" style={{ color: 'var(--gray)' }}>No Task Available</p>
        </div>
    );
}

export default ItemEmpty;