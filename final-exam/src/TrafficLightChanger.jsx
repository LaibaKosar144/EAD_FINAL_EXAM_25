import React from 'react'
import './TrafficLightColors.css'
import { useState, useEffect } from 'react'

const TrafficLightChanger = () => {

    {/*writing the useState and useEffect logic to change colors */}
      



    const [Color,setColor] = useState('red');

     {/*initially putting red as our state value because simulation starts with red */}

    useEffect(()=> {
        {/*this logis is necessary to make a certain light run for some specific seconds, then return its value so new one could be updated accordingly */}
        const timerID = setInterval(() => {
        setColor(Color => {
        if (Color === 'red') {
          return 'green'; {/*changing red to green as shown in simulation */}
        } else if (Color === 'green') {
          return 'yellow'; 
        } else { 
          return 'red'; 
        }
      });
    }, 3000);
    {/* changing every 3 seconds */}

     return () => clearInterval(currentColor);
  }, []);





   
  return (
    <div>
         <div> <h1> Traffic Light Simulator </h1></div>
        {/*1 div inside which we will have 3 lights, using static css file we created */}
        {/*providing css properties to each file */}
        <div className='Outer-Box'> 
            <div className='red-light'> </div>
            <div className='yellow-light' > ${} </div>
            <div className='green-light'> ${} </div>
        </div> 
      
    </div>
  )
}

export default TrafficLightChanger


