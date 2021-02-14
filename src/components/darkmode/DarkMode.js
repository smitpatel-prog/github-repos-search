import React from 'react';
import './DarkMode.css';

const DarkMode = ({ toggle }) => {
    return <label className="switch mb-0">
        <input type="checkbox" onChange={() => toggle()} />
        <span className="slider round"></span></label>
}

export default DarkMode;
