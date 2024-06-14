// Reasoning and wireframes. design section
import './Design.css';
import { WireframeTemp } from './WirefarmeTemp';
//image import
import MainWire from '../assests/MainWireframe.png';
import DesignWireI from '../assests/DesignWireI.png';
import DesignWireR from '../assests/DesignWireR.png';
import BlogWire from '../assests/BlogWire.png';
import ArtWire from '../assests/ArtWire.png';
import ArtWireP from '../assests/ArtWireP.png';
import ColourP from '../assests/PalletHex.png';
import Hex from '../assests/HexBig.png';

const wireframes = [
  {
    id: 1,
    title: 'Main Page',
    imageUrl: MainWire,
    description: 'Shows the layout of the main page as well as the navigation bar. ',
  },
  {
    id: 2,
    title: 'Design Page Inspo',
    imageUrl: DesignWireI,
    description: 'shows the layout of the design page. This tab shows the inspo and genral information about the overall design inspiration of the website. ',
  },
  {
    id: 3,
    title: 'Design Page Reasoing',
    imageUrl: DesignWireR,
    description: 'Shows the layout of the reasoning for the design',
  },
  {
    id: 4,
    title: 'Blog Page',
    imageUrl: BlogWire,
    description: 'The blog page will display each blog entry in a block giving the title of the article as well as a short description. The page will be decorated by pixel art I have made and include css animations. Losley inspired by the layout of tumblr posts. ',
  },
  {
    id: 5,
    title: 'Art Page',
    imageUrl: ArtWire,
    description: 'This page will be the entry page for all my internet art pieces. It will be decorated with marquees quotes and plants.',
  },
  {
    id: 6,
    title: 'Art Page Planning',
    imageUrl: ArtWireP,
    description: 'This page will look similar to the reasoning page, giving a breakdown of the artworks, a timeline of their progress, ispiration and my overall thoughts on the project.',
  },
];


export function ReasoningTab () {


    return (
      <section className="Design-Reason">
        <h2>Reasoning and Theory</h2>
        <h3>
          Goals, theory and execution:
        </h3>
      <p>
      I wanted to create a unique website inspired by visual design ideas that I find interesting. I wanted the websites design to make reference to old web design practises while still upholding various functional aspects of modern webdesign such as readability, simplicity and convenience. 
      I wish to achieve this by utilizing and being mindful of modern web design conventions (format of pages, interactivity (providing appropriate feedback to the users inputs) and simplicity) while also tying in visual elements that tie into the ideas of Plantwave.
      </p>
      <article className='Design-Colour'>
        <h3>
          Colour palette:
        </h3>
        <img src={Hex} alt="color palette"/>
        <p>
          The website will mainly be in greyscale, using various shades of grey. The other elements of colour on the website will come mostly from 
          various images and videos of nature and plants. The pinks and blues are there as preposed accent colour to provide contrast, break up visual elements, draw the users attention to specific elements or provide feedback to the user.   
        </p>
      </article>
      <article className='Design-Typ'>
        <h3>
          Typography and Font:
        </h3>
        <p>
          I want to use a mix of the chicago which was the font used on the classic mac os, Jacquard 12 which is a google font (for strange art and neon text), the default font and Chakra Petch which is another google font.
        </p>
      </article>

      <article className='Design-Wireframes'>
    
      <h3>
        Wireframes
      </h3>
      <div className="Wireframe-Container">
      {wireframes.map((frames) => (
        <WireframeTemp
          key={frames.id}
          title={frames.title}
          imageUrl={frames.imageUrl}
          description={frames.description}
        />
      ))}
    </div>     
      </article>
      <article className='Design-Theory'>
      <h3>
        Thoughts and Design Goals
      </h3>
      <p>
      The design gets more stranger an experimental as you venture further into the site. 
      This wasn’t my original plan but as I carried on working on both the website as a whole 
      and the Internet Artwork I just started to experiment more with the css styling because of 
      all the different inspirations I was coming into contact with.  
      </p>
      <p>

      </p>
      </article>
      </section>
    );
  };