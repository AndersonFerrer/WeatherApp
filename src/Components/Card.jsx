import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({name, temp, onClose, img, id}) {
  return (
        
        <div className='h-[200px] flex items-center flex-wrap w-[350px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 rounded-2xl p-0 text-3xl m-5 gap-[2px] transition-all duration-300'>
          <div className='w-[175px] flex flex-col flex-wrap items-center justify-center gap-0'>
            <h1 className='text-2xl font-semibold text-white sm:text-3xl'>{name}</h1>
            <img className='w-[100px] h-[100px]'src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} alt="icono_clima" />
            <h1 className='text-3xl font-bold text-white sm:text-4xl'>{temp} C°</h1>
          </div>

          <hr className='p-0 m-0 bg-white w-[1px] h-[120px]'/>

          <div className='w-[130px] transition duration-500 flex flex-col justify-center items-center flex-wrap m-auto gap-3'>
            <Link to={`/ciudad/${id}`}>
              <button className='hover:scale-110 duration-500 shadow-lg font-bold text-white text-[1rem] bg-black rounded-xl w-[130px] h-auto px-5 py-0'>Ver más
              </button>
            </Link>

              <button className='hover:scale-110 duration-500 shadow-lg text-[1rem] text-white font-bold bg-black rounded-xl w-[130px] h-auto py-0 px-5' onClick={onClose}>Eliminar</button>
         </div>
        </div>
  )
}
