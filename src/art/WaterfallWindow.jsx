/*translation;
merch video community
The sun. Comfort. Paradise. */

import React, { useEffect, useRef } from 'react';
import './Waterfall.css';
import myGif from "../assests/Waterfall.gif";

export function Waterfall ({gifSrc, textLines }){
    return(
      <div className="BackgroundContainer">
        <div>

        </div>
      <img className="GifBackground" src={gifSrc} alt="Waterfall GIF" />
      <div className="TextContainer">
          <div className="ScrollingText">
              {textLines.map((line, index) => (
                  <div className="TextLine" key={index}>{line}</div>
              ))}
          </div>
      </div>
      <div>
        <a href="https://catsystemcorp.bandcamp.com/album/--11" target="_blank" rel="noopener noreferrer" className='CRT'>太​陽​。​慰​安​。​楽​園​。
</a>

      </div>
  </div>
    );
};