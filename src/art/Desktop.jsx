// Desktop.js
import React, { useState } from 'react';
import Icon from './Icon';
import Window from './Window';
import '../components/Desktop.css';
import Synth from './Synth';
import { FishTank } from './FishTank';
import {Oracle} from '../Desktop/Oracle';
import Icon1 from '../assests/Orchid5.png';
import Icon2 from '../assests/LotusT.png';
import Icon3 from '../assests/Heart.png';
import Icon4 from '../assests/bat.png';

//  

export const Desktop = () => {
  const [windows, setWindows] = useState([]);

  const openWindow = (title, Component) => {
    setWindows([
      ...windows,
      { id: Date.now(), title, Component }
    ]);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(window => window.id !== id));
  };

  return (
    <div className="desktop">
      <Icon 
        label="Synth" 
        icon={Icon2} 
        onClick={() => openWindow('My Computer', Synth)} 
      />
      <Icon 
        label="Fish Tank" 
        icon={Icon3} 
        onClick={() => openWindow('Recycle Bin', FishTank)} 
      />
      <Icon 
        label="Oracles" 
        icon={Icon1} 
        onClick={() => openWindow('Notes', Oracle)} 
      />

      {windows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          Component={window.Component}
          onClose={() => closeWindow(window.id)}
        />
      ))}
      <div className='Nature'>

      </div>
      <div className='footer'>
      <p>
        are you a sign from god.
      </p>
      </div>
    </div>
  );
};