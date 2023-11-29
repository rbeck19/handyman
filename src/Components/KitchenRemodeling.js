import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import kitchen from "./images/kitchen.jpeg"

export default function KitchenRemodeling() {
    return (
    <div className="workTypeContainer"> 
        <div className="workTypeCard" id="Kitchen">
            <h1>Kitchen Remodeling</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non quod harum nam ad tempore dolor sapiente animi cupiditate praesentium nostrum numquam, incidunt molestiae</p>
        </div>
        <div className="imgContainer">
            <img className="kitchenImg" src={kitchen} alt="kitchen"/>
        </div>
    </div>

    )
}