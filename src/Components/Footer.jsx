import React from 'react';
import Iconos from '../assets/icons/Iconos.jsx';

export default function Footer() {
  return (
    <>
    

    <div className='z-10 bg-white   rounded-t-2xl flex m-0 flex-col flex-wrap justify-center text-center w-full mt-auto h-[150px] px-5'>

        <Iconos/> 
        <a className='text-black transition-all font-semibold duration-300  hover:scale-x-100 sm:text-[22px] text-[18px] hover:text-blue-500 ' rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">© 2022 WeatherApp | Anderson Ferrer</a>

    </div> 

    <div className='z-0 absolute bottom-0 bg-transparent rotate-180 shadow-md w-full h-[150px]'></div>

    </> 

  )
}
