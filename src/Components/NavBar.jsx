import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import cloudy from '../assets/cloudy.png'

export default function NavBar({onSearch}) {
  return (
      
      <nav className='shadow-xl sm:h-20 bg-white top-0 fixed transition-all w-full m-0 p-0 flex flex-wrap flex-col justify-center items-center sm:flex-row sm:justify-evenly h-[100px] gap-[0.125rem] z-50 flex-shrink'>

        <Link to='/'>
          <div className='relative bottom-1 flex flex-wrap items-center sm:gap-[0.125rem] gap-1'>
              <img className='w-8 sm:w-[45px] sm:filter sm:contrast-100 sm:inline-block' src={cloudy} alt="icono-logo"/>
              <h1 className='inline-block p-0 m-0 text-4xl font-bold text-transparent transition-all filter brightness-150 sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800'>WeatherApp</h1>
          </div>
        </Link>

        <SearchBar onSearch={onSearch}/>

      </nav>
      
  )
}
