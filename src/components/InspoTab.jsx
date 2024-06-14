// Inspiration tab for design section. Breaks down design inpo 
import inpoIMG from '../assests/Inspo.jpg'
import inpoIMG1 from '../assests/Inspo1.jpg'
import inpoIMG2 from '../assests/Inspo2.jpg'

export function InspirationTab () {
    return (
      <section className="Design-Inspo">
        <h2>Inspiration</h2>
        <p>The inspiration behind this website in old web nostalgia, nature and old minimalist web design</p>
        <p>
          These ideas and inspirations sent me down an aesthetic rabbit hole where i discovered the plantwave aesthetic.
        </p>
        <h3>
        A bit about Plantwave
        </h3>
        <p>
        Plantwave is a sub aesthetic of the vaporwave aesthetic which is a visual and musical aesthetic that emerged on the internet in the early 2010’s. The style draws heavely on ideas of nostalgia. The style is also offers a satirical critic of capitalism specifically the idealisation of the 80’s. THe style often uses, distorts and obscures references to pop-culture and artifacts of consumerism. 
        Plantwave specifically focuses of the interaction between digital interfaces and natural imagery. Usually the natural imagery takes the form of rainforest, intensely green plants and tranquil forest-scapes. Often these natural element are devoid of human interference and offer this feeling of emptiness. The digital interfaces usually take the form of old windows (anything from widows 1 to windows xp) borders and banners and classic mac (occasinally there are some later versions of the mac os used) fonts, banners and borders.    
        </p>
        <h3>
          Refrence images:
        </h3>
        
        <p>
          these are the main refrence images that I've used for inspiration

        </p>
        <div className="Design-Inspo-img">
        <img src={inpoIMG} alt="inpo image"/>
        <img src={inpoIMG1} alt="inpo image"/>
        <img src={inpoIMG2} alt="inpo image"/>
        </div>
        <p>
          Here's a link to my personal Plantwave pintrest board:
        </p>
        <a href="https://pin.it/6xjp2FQYW" target="_blank" rel="noopener noreferrer">
                    <button>Pintrest</button>
                </a>
      </section>
    );
  };