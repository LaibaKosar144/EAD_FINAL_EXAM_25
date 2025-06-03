import React from 'react'
import './TrafficLightColors.css'
import { useState, useEffect } from 'react'

const TrafficLightChanger = () => {

    {/*writing the useState and useEffect logic to change colors */}
      



    const {color,setColor} = useState('Red');

     {/*initially putting red as our state value because simulation starts with red */}

    useEffect(()=> {
        {/*this logis is necessary to make a certain light run for some specific seconds, then return its value so new one could be updated accordingly */}
        const currentColor = setInterval(() => {
        setColor(Color => {
        if (Color === 'Red') {
          return 'Green'; {/*changing red to green as shown in simulation */}
        } else if (prevLight === 'Green') {
          return 'Yellow'; 
        } else { 
          return 'Red'; 
        }
      });
    }, 2000);

     return () => clearInterval(intervalId);
  }, []);





   
  return (
    <div>
         <div> <h1> Traffic Light Simulator </h1></div>
        {/*1 div inside which we will have 3 lights, using static css file we created */}
        {/*providing css properties to each file */}
        <div className='Outer-Box'> 
            <div className='red-light'> RED</div>
            <div className='yellow-light' > YELLOW</div>
            <div className='green-light'> GREEN </div>
        </div> 
      
    </div>
  )
}

export default TrafficLightChanger


