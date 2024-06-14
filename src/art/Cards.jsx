import { useState} from 'react';
import './Waterfall.css';


export function Card ({ frontImage, backImage })  {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-face card-front">
        <img src={frontImage} alt="Front of card" />
      </div>
      <div className="card-face card-back">
        <img src={backImage} alt="Back of card" />
      </div>
    </div>
  );
};