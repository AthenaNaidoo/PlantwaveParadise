//main or hompage

import './Main.css';
import { Waterfall } from '../art/WaterfallWindow';
import waterfallGif from '../assests/Waterfall.gif';


const textLines = [
    'Who wants to be famous? Who wants to die for art?',
    'For twenty-seven years we Futurists have rebelled against the branding of war as anti-aesthetic. . . .', 
    'Accordingly we state: . . . War is beautiful because it establishes man’s dominion over the subjugated machinery by means of gas masks,', 
    'terrifying megaphones, flame throwers, and small tanks. War is beautiful because it initiates the dreamt-of metallization of the human body.',
    ' War is beautiful because it enriches a flowering meadow with the fiery orchids of machine guns. War is beautiful because it combines the gunfire,', 
    'the cannonades, the cease-fire, the scents, and the stench of putrefaction into a symphony. War is beautiful because it creates new architecture,', 
    'like that of the big tanks, the geometrical formation flights, the smoke spirals from burning villages, and many others. . . . Poets and artists of',
    'Futurism! . . . remember these principles of an aesthetics of war so that your struggle for a new literature and a new graphic art... may be illumined by them!',
  ];

export function Main() {
    
    return(
        <section className='Main'>
            <section className='Main-box'>
            <div className="Main-title">
            <h1>Welcome To Plantwave Paradise</h1>
            </div>
            <div className="Main-des">
                <p>
                    This is my portfolio site and final project for Interactive Media 4
                </p>
            </div>
            <div className='Main-about'>
                <p>
                    this plantwave paradise is meant to be a calming tranquil experience
                </p>
                <p>
                    if you want to see more feel free to go to my GitHub
                </p>
                <a href="https://github.com/AthenaNaidoo" target="_blank" rel="noopener noreferrer">
                    <button>Github</button>
                </a>
            </div>
			</section>
            <div className='Waterfall'>
            <Waterfall gifSrc={waterfallGif} textLines={textLines} />
            </div>				
        </section>
    );
};