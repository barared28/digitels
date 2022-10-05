import React, {useEffect, useState} from "react";
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import { ReactComponent as EditIcon } from '../../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/delete.svg';
import './style.css';

function ContentDropDown({ handleClose }) {
    const [first, setFirst] = useState(true);


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

    return (
        <div className="menu-item-dropdown-container" id="dropdown">
            <button className="menu-dropdown-btn">
                <div className="rotate">
                    <ArrowIcon className="icon" />
                </div>
                Move Left
            </button>
            <button className="menu-dropdown-btn">
                <ArrowIcon className="icon" />
                Move Right
            </button>
            <button className="menu-dropdown-btn">
                <EditIcon className="icon" />
                Edit
            </button>
            <button className="menu-dropdown-btn">
                <DeleteIcon className="icon" />
                Delete
            </button>
        </div>
    );
}

function MenuItem() {
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
                <ContentDropDown handleClose={() => setShowDrop(false)} show={showDrop} />
            )}
        </div>
    );
}

export default MenuItem;