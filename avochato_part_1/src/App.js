import React from 'react';
import './App.css';
import Carousel from './components/carousel';

const App = () => {
  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel />
        {/* <button 
          onClick={handleClick}
          className="link-button">
            Vanilla JS (Part 2)
        </button> */}
    </div>
  );
}

export default App;
