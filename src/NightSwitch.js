import React from 'react';
import './NightSwitch.css';

const NightSwitch = ({ toggle }) => {
    return <label className="switch mb-0">
        <input type="checkbox" onChange={() => toggle()} />
        <span className="slider round"></span></label>
}

export default NightSwitch;