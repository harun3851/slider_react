import React, { useState } from 'react';
import './BackgroundSlider.css';
import imageSlide from './data';


  const BackgroundSlider = () => {
    const[currentState, setCurrentState]= useState(0)
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
                <h1>{imageSlide[currentState].title}</h1>       
                <p>{imageSlide[currentState].body}</p>            </div>
                <div className='carausel-boullt'></div>
        </div>
    </div>
  );  
}

export default BackgroundSlider;
