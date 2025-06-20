import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const bottom = () => {
  useGSAP(function(){
    gsap.to("#rotating-image",{
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
      
    })
  })
  return (
     <>
     <div className=' absolute bottom-1 left-0 px-28 py-12 flex items-end justify-between w-full '>
     <div>
      <h2 className='text-white text-xl'>BRAND DESIGN | WEBSITE DESIGN <br /><span className='text-gray-500'> RESPOKE FREELANCE</span></h2>
     </div>
     <div>
      <img id='rotating-image' className='h-[5vw] mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
     </div>
     </div>
     </>
  )
}

export default bottom