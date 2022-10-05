import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Progress from "../molecules/progress";
import MenuItem from "../molecules/menu-item";

function Item({ type }) {
    return (
        <div className="item-box">
            <p className="font-medium item-text">Re-designed the zero-g doggie bags. No more spills!</p>
            <div className="item-action-container">
                <Progress />
                <MenuItem />
            </div>
        </div>
    );
}

Item.propTypes = {
    type: PropTypes.string,
}

Item.defaultProps = {
    type: '',
}

export default Item;