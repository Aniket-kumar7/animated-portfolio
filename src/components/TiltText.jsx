import React from 'react'

const tilttext = (props) => {
  return (
    <div id='tilt-text' className='mt-45' ref={props.abc}>
      <h1 className='font-[myfont1] leading-[3.5vw] text-[4.2vw] text-white '>I AM <span className='text-black'>DARK MODE <sup className='text-white text-4xl'>TM</sup></span></h1>
      <h1 className='text-[7vw] leading-[7.2vw] font-bold text-white uppercase font-[myfont1]'>designer </h1>
      <h1 className='font-[myfont1] leading-[3.8vw] text-[4.3vw] text-white uppercase'>to hire</h1>

    </div>
  )
}
export default tilttext