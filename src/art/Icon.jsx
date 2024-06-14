// Icon.js
import React from 'react';
import './Waterfall.css';

const Icon = ({ label, icon, onClick }) => {
  return (
    <div className="icon" onClick={onClick}>
      <img src={icon} alt={`${label} icon`} className="icon-image" />
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default Icon;