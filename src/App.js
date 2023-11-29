import React, { useRef } from 'react';
import './App.css';
import Header from "./Components/Header"
import Title from "./Components/Title"
import About from "./Components/About"
import WorkType from './Components/WorkType'
import KitchenRemodeling from './Components/KitchenRemodeling';
import WaterHeater from './Components/WaterHeater';
import Deck from "./Components/Deck";
import Footer from "./Components/Footer"


function App() {

  const kitchen = useRef(null)
  const waterHeater = useRef(null)
  const deck = useRef(null)
  const contact = useRef(null) 

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="headerContainer">
            <nav>

                <span className="navItem" onClick={()=> scrollToSection(kitchen)}>
                    Kitchen Remodeling
                </span>

                <span className="navItem" onClick={()=> scrollToSection(waterHeater)}>
                    Water Heater
                </span>

                <span className="navItem" onClick={()=> scrollToSection(deck)}>
                    Decks
                </span>

                <span className="navItem" onClick={()=> scrollToSection(contact)}>
                    Contact
                </span>
            </nav>

        </div>
      <Title />
      <About />
      {/* <WorkType /> */}
      <div className="workType">

        <div ref={kitchen}>
          <KitchenRemodeling />
        </div>

        <div ref={waterHeater}>
          <WaterHeater />
        </div>
        
        <div ref={deck}>
          <Deck />
        </div>
       
      </div>

      <div ref={contact}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
