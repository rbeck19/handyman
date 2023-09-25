import React from 'react';
import './App.css';
import Header from "../src/Components/Header"
import Title from "../src/Components/Title"
import About from "../src/Components/About"
import WorkType from './Components/WorkType';


function App() {
  return (
    <div>
    <Header />
    <Title />
    <About />
    <WorkType />
    </div>
  );
}

export default App;
