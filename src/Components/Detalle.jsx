import React from 'react'

export default function Detalle({forecast, cities}) {  
  return (
    
    <div className='relative text-black mt-[150px]'>
      <h1>{forecast.name}</h1>
      <h2>{forecast.temp1}</h2>
      <h2>{forecast.temp2}</h2>
      <h3>{forecast.temp3}</h3>
      <h4>Hola</h4>
      <h5>{cities.name}</h5>
    </div>
    
  )
}
  

