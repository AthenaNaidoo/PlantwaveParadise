import { Link } from "react-router-dom";
import Sword from '../assests/BlackSword.png';
import Heart from '../assests/Heart.png';
import Orchid from '../assests/Orchid4.png';
import './Waterfall.css';

export function HeartButton() {
    return(
        <div>
        <Link to="/art/realm">
        <div className="heart-container" >
            <img src={Orchid} alt="Heart" className="heart" />
            <img src={Sword} alt="Sword" className="sword" />
        </div>
        </Link>
        </div>
    );
};