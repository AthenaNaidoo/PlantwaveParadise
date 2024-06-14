//artwork goes here
import './Art.css';

import { HeartButton } from '../art/HeartButton';


export function InternetArt () {
    return (
      <div className="Internet-Art">
        <h2 >Internet Artwork</h2>
        
        <h3 >Welcome to Art realm inpired by the Old Web</h3>
        <p>
          Art Realm is a digital collage of internet art. Enjoy the little collection of things and eplore and play to your hearts content.
        </p>
      <HeartButton/>
        <div >
        <p className='pink-neon'>
          Click the orchid to enter the portal
        </p>
        </div>
      </div>
    );
  };