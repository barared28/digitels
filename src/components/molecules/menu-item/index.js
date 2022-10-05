import React, {useEffect, useState} from "react";
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
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
            <button>Move Right</button>
            <button>Move Left</button>
            <button>Edit</button>
            <button>Delete</button>
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