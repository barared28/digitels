import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/delete.svg';
import './style.css';

function ContentDropDown(props) {
    const [first, setFirst] = useState(true);
    const {
        handleClose,
        onDelete,
        onMoveRight,
        onMoveLeft,
        onEdit,
        showMoveRight,
        showMoveLeft,
    } = props;

    function helper(e){
        if (!(document.getElementById('dropdown').contains(e.target))){
            handleClose();
        }
    }

    useEffect(() => {
        // prevent first click
        if (!first) {
            window.addEventListener('click', helper);
        }
        return () => {
            window.removeEventListener('click', helper);
        }
    }, [first]);

    useEffect(() => {
        setFirst(false);
    }, [])

    const handleClick = (callback) => {
        handleClose();
        callback();
    }

    return (
        <div className="menu-item-dropdown-container" id="dropdown">
            {showMoveLeft && (
                <button
                    className="menu-dropdown-btn"
                    onClick={() => handleClick(onMoveLeft)}
                >
                    <div className="rotate">
                        <ArrowIcon className="icon" />
                    </div>
                    Move Left
                </button>
            )}
            {showMoveRight && (
                <button
                    className="menu-dropdown-btn"
                    onClick={() => handleClick(onMoveRight)}
                >
                    <ArrowIcon className="icon" />
                    Move Right
                </button>
            )}
            <button
                className="menu-dropdown-btn"
                onClick={() => handleClick(onEdit)}
            >
                <EditIcon className="icon" />
                Edit
            </button>
            <button
                className="menu-dropdown-btn"
                onClick={() => handleClick(onDelete)}
            >
                <DeleteIcon className="icon" />
                Delete
            </button>
        </div>
    );
}

function MenuItem(props) {
    const [showDrop, setShowDrop] = useState(false);
    return (
        <div className="relative">
            <button
                className="menu-button"
                onClick={() => setShowDrop(true)}
            >
                <MenuIcon />
            </button>
            {showDrop && (
                <ContentDropDown handleClose={() => setShowDrop(false)} show={showDrop} {...props} />
            )}
        </div>
    );
}

MenuItem.propTypes = {
    onDelete: PropTypes.func,
    onMoveRight: PropTypes.func,
    onMoveLeft: PropTypes.func,
    onEdit: PropTypes.func,
    showMoveLeft: PropTypes.bool,
    showMoveRight: PropTypes.bool,
}

MenuItem.defaultProps = {
    onDelete: () => {},
    onMoveRight: () => {},
    onMoveLeft: () => {},
    onEdit: () => {},
    showMoveLeft: false,
    showMoveRight: false,
}

export default MenuItem;