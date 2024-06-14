import {Card} from '../art/Cards.jsx';
import Ace from '../assests/AceHeart.png';
import Back from '../assests/CardBack.png';

export function Oracle ()  {

  return (
    <div>
        <Card frontImage={Ace} backImage={Back} />
        <Card frontImage={Ace} backImage={Back} />
        <Card frontImage={Ace} backImage={Back} />
    </div>
  );
};