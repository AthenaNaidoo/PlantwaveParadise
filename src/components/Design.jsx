import './Design.css';
import React, { useState } from 'react';
import { InspirationTab } from './InspoTab';
import { ReasoningTab } from './ReTab';

export function Design () {
    const [activeTab, setActiveTab] = useState('inspiration'); 

    return (
      <div className='Design'>
        <div className='tab-buttons'>
          <button onClick={() => setActiveTab('inspiration')}>Inspiration</button>
          <button onClick={() => setActiveTab('reasoning')}>Reasoning</button>
        </div>
  
        
        {activeTab === 'inspiration' ? <InspirationTab /> : <ReasoningTab />}
      </div>
    );
};

//switches between inspo and reasoning depending on what button is pressed