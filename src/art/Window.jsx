// desktop windows
import React from 'react';
import Draggable from 'react-draggable';
import './Waterfall.css';

const Window = ({ id, title, Component, onClose }) => {
  return (
    <Draggable>
      <div className="window" id={`window-${id}`}>
        <div className="window-title-bar">
          <span>{title}</span>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="window-content">
          <Component />
        </div>
      </div>
    </Draggable>
  );
};

export default Window;