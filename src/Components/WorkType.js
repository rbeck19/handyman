import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import kitchen from "./images/kitchen.jpeg"
import waterheater1 from "./images/waterHeater.jpeg"
import waterheater2before from "./images/waterHeaterBefore.jpeg"
import waterheater2after from "./images/waterHeaterAfter.jpeg"
import deckBefore from "./images/deckBefore.jpeg"
import deckAfter from "./images/deckAfter.jpeg"

export default function WorkType() {

    const handleDragStart = (e) => e.preventDefault();
    const WaterHeaters = [
        <img  className="sliderimg" src={waterheater1} onDragStart={handleDragStart} alt="water heater" />,
        <img  className="sliderimg" src={waterheater2before} onDragStart={handleDragStart} alt="water heater" />,
        <img  className="sliderimg" src={waterheater2after} onDragStart={handleDragStart} alt="water heater" />,
    ]
    const Deck = [
        <img  className="sliderimg" src={deckBefore} onDragStart={handleDragStart} alt="deck before" />,
        <img  className="sliderimg" src={deckAfter} onDragStart={handleDragStart} alt="deck before" />,
    ]

    return(
        <div className="workType"> 


            <div className="workTypeContainer"> 
                <div className="workTypeCard" id="Kitchen">
                    <h1>Kitchen Remodeling</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
                <div className="imgContainer">
                    <img className="kitchenImg" src={kitchen} alt="kitchen"/>
                </div>
            </div>



            <div className="workTypeContainer">
                <div className="workTypeCard">
                    <h1>Water Heater</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
                <div className="carouselContainer">
                    <AliceCarousel mouseTracking disableButtonsControls={true} items={WaterHeaters} />
               </div>
            </div>



            <div className="workTypeContainer">
                <div className="workTypeCard">
                    <h1>Job Type</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
                <div className="carouselContainer">
                    <AliceCarousel mouseTracking disableButtonsControls={true} items={Deck} />
               </div>
            </div>




            <div className="workTypeContainer"> 
                <div className="workTypeCard">
                    <h1>Job Type</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
            </div>




            <div className="workTypeContainer">
                <div className="workTypeCard">
                    <h1>Job Type</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
            </div>




            <div className="workTypeContainer">
                <div className="workTypeCard">
                    <h1>Job Type</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
                </div>
            </div>
            

        </div>
    )
}