import React from "react";
import { ReactComponent as CompleteIcon } from '../../../assets/complete.svg';
import './style.css';

function Progress({ percent }) {
    return (
        <div className="progress-container">
            <div className="progress-bar">
                {percent >= 100
                    ? (
                        <div className="progress-bar-percent" style={{ width: '100%' }}>
                            <div className="bar-percent bar-percent-full" />
                        </div>
                    )
                    : (
                        <div className="progress-bar-percent" style={{ width: `${percent}%` }}>
                            <div className="bar-percent" />
                        </div>
                    )
                }
            </div>
            {percent >= 100
                ? <CompleteIcon />
                : <p className="progress-bar-text">{`${percent}%`}</p>
            }
        </div>
    );
}

export default Progress;