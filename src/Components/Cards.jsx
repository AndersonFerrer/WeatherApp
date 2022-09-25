import React from 'react'
import Card from './Card'

export default function Cards({city,forecast, onClose}) {
  return (
    <div className='transition-all duration-300 mt-[120px] sm:mt-[100px] w-full h-auto flex flex-wrap justify-center items-center px-0 m-0 mb-5'>
       {
      city?.map(c => <Card
        key={c.id}
        id={c.id}
        name={c.name}
        temp={c.temp}
        img={c.img}
        onClose={() => onClose(c.id)}
      />)
} 
  {
    forecast?.map(c => <Card
      name={c.name}
      id={c.id}
      key={c.id}
      temp={c.temp}
      temp1={c.temp1}
      temp2={c.temp2}
      temp3={c.temp3}
      temp4={c.temp4}
      temp5={c.temp5}
      temp6={c.temp6}
      prop={c.prop}
      prop1={c.prop1}
      prop2={c.prop2}
      prop3={c.prop3}
      prop4={c.prop4}
      prop5={c.prop5}
      prop6={c.prop6}
      hour={c.hour}
      hour1={c.hour1}
      hour2={c.hour2}
      hour3={c.hour3}
      hour4={c.hour4}
      hour5={c.hour5}
      hour6={c.hour6}
      icon={c.icon}
      icon1={c.icon1}
      icon2={c.icon2}
      icon3={c.icon3}
      icon4={c.icon4}
      icon5={c.icon5}
      icon6={c.icon6}
      wind={c.wind}
      wind1={c.wind1}
      wind2={c.wind2}
      wind3={c.wind3}
      wind4={c.wind4}
      wind5={c.wind5}
      wind6={c.wind6}
    />)
  }
      
    </div>
  );
}
