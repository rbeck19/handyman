import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import deckBefore from "./images/deckBefore.jpeg"
import deckAfter from "./images/deckAfter.jpeg"

export default function Deck() {

    const handleDragStart = (e) => e.preventDefault();
    const Deck = [
        <img  className="sliderimg" src={deckBefore} onDragStart={handleDragStart} alt="deck before" />,
        <img  className="sliderimg" src={deckAfter} onDragStart={handleDragStart} alt="deck before" />,
    ]

    return(
        <div className="workTypeContainer">
        <div className="workTypeCard">
            <h1>Deck Repair</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
        </div>
        <div className="carouselContainer">
            <AliceCarousel mouseTracking disableButtonsControls={true} items={Deck} />
       </div>
    </div>
    )
}