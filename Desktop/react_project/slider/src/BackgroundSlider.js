import React, { useState } from 'react';
import './BackgroundSlider.css';
import imageSlide from './data';


  const BackgroundSlider = () => {
    const[currentState, setCurrentState]= useState(2)
    const bgImageStyle={
        backgroundImage:`url(${imageSlide[currentState].name})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%',

    }
  return (
    <div className='countiner-style'>
        <div style={bgImageStyle}> </div>
        <div className='description'>
            <div>
                <h1>text</h1>       
                <p>some text1</p>            </div>
        </div>
    </div>
  );  
}

export default BackgroundSlider;
