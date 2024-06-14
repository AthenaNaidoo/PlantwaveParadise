import React, { useState } from 'react';
import './Waterfall.css'; 

export const Translate = ({ japanese, english }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleMouseEnter = () => {
    setShowTranslation(true);
  };

  const handleMouseLeave = () => {
    setShowTranslation(false);
  };

  return (
    <div className="translation" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="japanese">{japanese}</span>
      {showTranslation && <span className="english">{english}</span>}
    </div>
  );
};