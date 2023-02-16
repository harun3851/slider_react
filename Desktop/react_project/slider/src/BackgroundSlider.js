import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css';
import imageSlide from './data';


  const BackgroundSlider = () => {
    const[currentState, setCurrentState]= useState(2);
    useEffect(()=>{
        const timer=setTimeout(()=>
       {
        if(currentState===2){
            setCurrentState(0)
        }else
        {
            setCurrentState(currentState+1)
        }
       },15000 )
    },[currentState]);
    const bgImageStyle={
        backgroundImage:`url(${imageSlide[currentState].name})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%',

    }
    const goToNext=(currentState)=>{
        setCurrentState(currentState);
    }
  return (
    <div className='countiner-style'>
        <div style={bgImageStyle}> </div>
        <div className='description'>
            <div>
                <h1>{imageSlide[currentState].title}</h1>       
                <p>{imageSlide[currentState].body}</p>           
            </div>
                <div className='carausel-boullt'>
                {
                imageSlide.map((imageSlide,currentState)=>(
                    <span key={currentState} onClick={() => goToNext(currentState)}></span>
                ))
            }
                </div>
        </div>
    </div>
  );  
}

export default BackgroundSlider;
