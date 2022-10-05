import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Progress from "../molecules/progress";
import MenuItem from "../molecules/menu-item";

function Item({ type, data }) {
    const { name, progress_percentage: percent } = data
    return (
        <div className="item-box">
            <p className="font-medium item-text">{name}</p>
            <div className="item-action-container">
                <Progress percent={percent} />
                <MenuItem />
            </div>
        </div>
    );
}

Item.propTypes = {
    type: PropTypes.string,
    data: PropTypes.shape({
        name: PropTypes.string,
        progress_percentage: PropTypes.number,
        todo_id: PropTypes.number,
    })
}

Item.defaultProps = {
    type: '',
    data: {
        name: '',
        progress_percentage: 0,
        todo_id: 0,
    }
}

export default Item;