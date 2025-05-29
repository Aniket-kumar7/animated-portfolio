import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText.jsx'
import Page1Bottom from '../components/Page1Bottom.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';




const Page1 = () => {
  // useref is use to create a reference to the DOM element
  const tiltRef = useRef(null);
  // useState is used to create a state variable
  // xVal and yVal are the state variables
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);
  // MouseOver function is used to get the mouse position
  // and set the xVal and yVal state variables
  const MouseOver = (e) => {
    // get the width and height of the tiltRef element
    // and divide it by 2 to get the center of the element
    const x = (tiltRef.current.getBoundingClientRect().width/2);
    const y = (tiltRef.current.getBoundingClientRect().height/2);

    // get the mouse position and subtract the center of the element
    // to get the x and y position of the mouse
    // and set the xVal and yVal state variables
    // setxVal and setyVal are the state variables
    setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - x) / 20);
    setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - y) / 10);


    //  console.log(tiltRef.current.getBoundingClientRect().y);
    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)  `;
  }
  // useGSAP is a custom hook that is used to create a gsap animation
  // and is used to animate the tiltRef element
  useGSAP(function(){

    gsap.to(tiltRef.current, {
      // set the transform property of the tiltRef element
      // to rotate the element based on the xVal and yVal state variables
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      // set the duration of the animation to 5 seconds to make it smooth and slow
      duration: 5,
      // power2.out is used to set the easing of the animation
      // to make it smooth
      ease: "power2.out",
    });

  },
  // set the xVal and yVal state variables to 0
  // to make the animation smooth and slow
  [xVal, yVal],
  // set the xVal and yVal state variables to 0
  [0, 0])

  return (
    <>
      <div className="w-full h-screen bg-white px-4 py-4" onMouseMove={(e) => {
            MouseOver(e);
           }} >
        <div id='tilt-container' className="w-full h-full p-20 shadow-xl shadow-gray-600 rounded-4xl bg-[url('./assets/ANZO.avif')] bg-cover">
        
           <TiltText abc={tiltRef} />
          <Page1Bottom />
        </div>
      </div>
    </>
  )
}

export default Page1