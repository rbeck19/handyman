import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import waterheater1 from "./images/waterHeater.jpeg"
import waterheater2before from "./images/waterHeaterBefore.jpeg"
import waterheater2after from "./images/waterHeaterAfter.jpeg"

export default function WaterHeater() {

    const handleDragStart = (e) => e.preventDefault();
    const WaterHeaters = [
        <img  className="sliderimg" src={waterheater1} onDragStart={handleDragStart} alt="water heater" />,
        <img  className="sliderimg" src={waterheater2before} onDragStart={handleDragStart} alt="water heater" />,
        <img  className="sliderimg" src={waterheater2after} onDragStart={handleDragStart} alt="water heater" />,
    ]
    return (
    <div className="workTypeContainer">
        <div className="workTypeCard">
            <h1>Water Heater</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
        </div>
        <div className="carouselContainer">
            <AliceCarousel mouseTracking disableButtonsControls={true} items={WaterHeaters} />
        </div>
    </div>

    )
}