import React, { useState } from 'react';
import { InternetArt } from './IntArt';
import { Planning } from './Plan';
import './Art.css';

export function Art () {
    const [activeTab, setActiveTab] = useState('intArt'); // Initial active tab

    return (
      <div className='Art'>
        <div className='tab-buttons'>
          <button onClick={() => setActiveTab('intArt')}>Artwork</button>
          <button onClick={() => setActiveTab('planning')}>Planning and Inspo</button>
        </div>
  

        {activeTab === 'intArt' ? <InternetArt /> : <Planning />}
      </div>
    );
};

//this is the same as the design page 
//