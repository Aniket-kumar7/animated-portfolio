
import React from 'react'

const header = () => {
   
  return (
     <nav className='fixed flex items-center justify-between w-full z-10 mt-9 py-6 px-8'>
      <div className='fixed w-full px-5   shadow-2xl shadow-black'>
          <img className=' h-15 object-cover fixed' src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_51,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="background" />
        </div>
      <div id='right-nav' className="w-full h-full flex items-center justify-end   z-30 m-4 ">
         <button  className='bg-black text-white px-4 py-2 rounded-full border-white border-4 hover:bg-gray-500 '>HIRE ME</button>
         <div className=' '>
         <img className='m-4 transition-transform duration-500 hover:rotate-90' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nGNgGAUkAm8GBoYnDAwMjxkYGDypJIcCQAr+Q/EjKsnR1wJPqGKQIg8qyY0C0sBoMv0/mkwHP/AeLU0ZRkvTQQcAduht8IqDSCkAAAAASUVORK5CYII=" alt="circled-menu"></img>

         </div>
      </div>
     </nav>
  )
}

export default header