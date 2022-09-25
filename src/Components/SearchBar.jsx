import React from 'react'
import { useState } from 'react'
import search from '../assets/search.png'

export default function SearchBar({onSearch}) {
  const [cities, setCities] = useState('');
  return (
    <>
      <div className='w-[300px] h-auto'>
        <form className='relative flex items-center justify-center h-12 px-2 py-1 bg-white border-2 border-blue-500 rounded-lg hover:border-blue-700' onSubmit={(e) => {
        e.preventDefault();
        onSearch(cities);
        }}>
          <img className='absolute h-4 left-2' src={search} alt="" />
          <input type="text" value={cities} placeholder='Ingrese Ciudad' onChange={e => setCities(e.target.value)} className='absolute text-black bg-white rounded-none outline-none left-8'/>
          <button type="submit" className='absolute right-2 z-100 rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 filter brightness-150 px-3 py-1 transitions-all duration-300 hover:scale-105  active:from-blue-800 active:to-blue-600 active:via-blue-600 text-[#ffffff] font-semibold '>Buscar</button>
        </form>
        
      </div>
    </>
  )
}
