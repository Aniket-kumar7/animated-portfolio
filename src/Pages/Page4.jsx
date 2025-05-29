import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from '../assets/ELEGANT.avif';
import IPad from '../assets/I PAD.avif';
import Mac from '../assets/AIR V.avif';

const page4 = () => {
   gsap.registerPlugin(ScrollTrigger);
    useGSAP(function () {
        gsap.from('#scrol', {
            opacity: 0,
            duration: 2,
            stagger: 3,


            scrollTrigger: {
                trigger: "#scrol",
                scroller: "body",
                start: "top 50%",
                end: "top 10%",
                // markers: true,
            ease: "power2.out",

                
                scrub: 5
            }

        }


        )
    })
  return (
    <div className='w-screen h-screen px-3 py-7 '>

      <div className='w-full h-[95vh] relative flex flex-col items-center  rounded-4xl bg-black overflow-x-auto bg-contain bg-no-repeat bg-right' style={{ backgroundImage: `url(${Image})` }}>
        {/* <img className='w-full h-full object-fill al rounded-4xl' src={Image} alt="" /> */}
        <div className='absolute left-0 w-[50%] h-[90vh] items-center   flex justify-center flex-col px-40 gap-4' >
          <h1 id='scrol' className='uppercase text-[12vw] font-[myfont3] leading-43.5 mb-10  text-white'>[ ELEGANT ]</h1>
          <h1 id='scrol' className='text-xl text-center text-white whitespace-normal font-[myfont2]'>REFINED | SOPHISTICATED | IMPACTFUL
            STRATEGY | UNCOMPROMISING DISCIPLINE</h1>
          <h2 id='scrol' className='text-center text-md text-gray-400 text-md font-[myfont2]'>Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding..</h2>
          <button id='scrol' className='border-4 mt-10 border-white px-39 rounded-full py-3 text-white uppercase font-[myfont2]'>Case study</button>
        </div>
        <div className='absolute right-0 w-[50%] h-[100%]   flex justify-center flex-wrap overflow-hidden'   >
           <img src={Mac} alt="" className='absolute z-20 top-35 left-[20%] w-[70%] h-[70%] object-contain'/>
           <img src={IPad} alt="" className='absolute z-30 top-90 left-[20%] w-[40%] h-[40%] object-contain'/>


        </div>
      </div>

    </div>
  )
}

export default page4