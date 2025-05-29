import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from '../assets/moon.mp4'

const Page3 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(function () {
        gsap.from('#scrol2', {
            opacity: 0,
            duration: 2,
            stagger: 3,


            scrollTrigger: {
                trigger: "#scrol2",
                scroller: "body",
                start: "top 50%",
                end: "top 10%",
                // markers: true,
                scrub: 3
            }

        }


        )
    })
    return (
        <div className='w-full h-screen px-3 py-7 '>
            <div className='w-full h-[95vh] relative flex flex-coll iteams-center  rounded-4xl bg-black overflow-x-auto '>
                <video autoPlay={true} loop muted  className='w-full object-fill  ' src="https://video.wixstatic.com/video/f1c650_988626917c6549d6bdc9ae641ad3c444/1080p/mp4/file.mp4"></video>
                <div className='absolute left-0 w-[50%] h-[90vh] items-center   flex justify-center flex-col px-40 gap-4' >
                    <h1 id='scrol2' className='uppercase text-[12vw] font-[myfont3] leading-43.5 mb-10  text-white'>about</h1>
                    <h1 id='scrol2' className='text-xl text-center text-white whitespace-normal font-[myfont2]'>INTUITIVE APPROACH | FUTURE-FOCUSED
                        STRATEGY | UNCOMPROMISING DISCIPLINE</h1>
                    <h2 id='scrol2' className='text-center text-md text-gray-400 text-md font-[myfont2]'> Anyone can create. Some have the talent to design. But who can capture and translate
                        your vision into a lasting legacy?
                        True design is more than aesthetics; web design is a complete extension of your brand - a seamless blend of visual identity, your story and messaging, your goals and strategy working together to create a powerful digital experience. It’s not a separate piece -

                        it’s your brand in action.</h2>
                    <button id='scrol2' className='border-4 mt-10 border-white px-39 rounded-full py-3 text-white uppercase font-[myfont2]'>Explore</button>
                </div>
                <div className='absolute right-0 w-[50%] h-[90vh] items-center  ' >
                    <video className='w-1/2 h-full ' autoPlay={true} loop muted  src={Video}></video>


                </div>
            </div>
        </div>
    )
}

export default Page3