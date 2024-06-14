// Planning and art idea
import './Art.css';
import { Link } from 'react-router-dom';
import FileImg from '../assests/File.png';

export function Planning () {
    return (
      <div className='Plan-Inspo'>
        <h2>Planning and Inspo</h2>
      <article className="Art-Idea">
      <h3>
          Idea:
        </h3>
        <p>
        My internet art work is in the form of a digital collage of various different elements. 
        I wanted to create something partially inspired by Cameron’s World the internet artwork I choose for my essay. 
        The collage was allso inspired by old web design and newer graphic design. I also wanted to use this opportunity to 
        experiment and create artworks that I’ve wanted to try. This art work uses the web browser as a canvas and the internet as inspiration. 
        </p>
        <p>
        I’ve added various little art elements, including an ascii fish tank, a card reader, a little synth using the tone.js library 
        (I’ve been wanting to play around with this library and making instruments and even though the little synth is pretty basic I still think 
        its a fun addition). I’ve also included various other visual elements that have caught my intrest. If youd like to find out some more indepth 
        
        info on the individual art pieces and the reasoning as well as the various inspirations I’d encourage you to take a look at the dev log which you can find here:
        <Link to="/blog/devblog" className='link'>
        <img src={FileImg} alt="File img"  />
      </Link>
        </p>
      </article>
      <article className="Art-Inspiration">
      <h3>
          Inspiration:
        </h3>
        <p>
          here's some of the inspiration for my previous Idea which was glitch art. I write about my process trying to make glitch art using javascript and css in the dev blog. I've left these here just for intrest and because I thnk these artworks are reall cool and inspiring.  
        </p>
        <ul className="Art-Images">
          <li>
            <img />
          </li>
        </ul>
      <ul className="Art-Links">
        <li>
          <a href="https://nataliastuyk.com/projects/heliocene/" target="_blank" rel="noopener noreferrer">https://nataliastuyk.com/projects/heliocene/</a>
        </li>
        <li>
          <a href="https://x.com/_renyuan/status/1782610063292805550?s=46" target="_blank" rel="noopener noreferrer">https://x.com/_renyuan/status/1782610063292805550?s=46</a>
        </li>
        <li>
          <a href="https://x.com/takawo/status/1781504826917941653?s=46" target="_blank" rel="noopener noreferrer">https://x.com/takawo/status/1781504826917941653?s=46</a>
        </li>
        <li>
          <a href="https://x.com/hypereikon/status/1766609461735571847?s=46" target="_blank" rel="noopener noreferrer">https://x.com/hypereikon/status/1766609461735571847?s=46</a>
        </li>
        <li>
          <a href="https://x.com/rvtgrrr/status/1750887381429788920?s=46" target="_blank"rel="noopener noreferrer">https://x.com/rvtgrrr/status/1750887381429788920?s=46</a>
        </li>
        <li>
          <a href="https://x.com/augustaghast/status/1743009119986971096?s=46" target="_blank" rel="noopener noreferrer">https://x.com/augustaghast/status/1743009119986971096?s=46</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=r5YkU5Xu4_E" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=r5YkU5Xu4_E</a>
        </li>
        <li>
          <a href="https://www.thewhiteroom.gallery/art/pink-flower-glitch-art-3-by-oz-van-rosen" target="_blank" rel="noopener noreferrer">https://www.thewhiteroom.gallery/art/pink-flower-glitch-art-3-by-oz-van-rosen</a>
        </li>
        <li>
          <a href="https://flash---art.com/2021/04/the-uncanny-valley-glitch-art/" target="_blank" rel="noopener noreferrer">https://flash---art.com/2021/04/the-uncanny-valley-glitch-art/</a>
        </li>
      </ul>
      </article>
      </div>
    );
  };