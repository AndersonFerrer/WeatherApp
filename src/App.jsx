import { useState } from 'react'
import {Route} from 'react-router-dom'
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
import Detalle from './Components/Detalle';
import Footer from './Components/Footer'

const apiKey = 'c475392c8700762ef50aeb730efb4102';

function App() {

  const [city, setCity] = useState([]);
  const [forecast, setForecast] = useState([])

  function onClose(id) {
    setCity(oldCity => oldCity.filter(c => c.id != id))
  }

  function onSearch(ciudad) {
    for(let cities of city) {
      if (cities.name.toLowerCase() === ciudad.toLowerCase()) {
        alert('Esta ciudad ya se encuentra en tu lista')
        return
      }
    }


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main != undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp.toFixed(0),
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCity(oldCity => [...oldCity, ciudad])
      }
      else {
        return 'Ciudad no encontrada'
      }
    });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((res) => {
      if(res.list != undefined) {
        const forecast = {
          name: res.city.name,
          id: res.city.id,
          temp: res.list[0].main.temp,
          temp1: res.list[1].main.temp,
          temp2: res.list[2].main.temp,
          temp3: res.list[3].main.temp, 
          temp4: res.list[4].main.temp,
          temp5: res.list[5].main.temp,
          temp6: res.list[6].main.temp,
          icon:  res.list[0].weather[0].icon,
          icon1: res.list[1].weather[0].icon,
          icon2: res.list[2].weather[0].icon,
          icon3: res.list[3].weather[0].icon,
          icon4: res.list[4].weather[0].icon,
          icon5: res.list[5].weather[0].icon,
          icon6: res.list[6].weather[0].icon,
          wind:  res.list[0].wind.speed,
          wind1: res.list[1].wind.speed,
          wind2: res.list[2].wind.speed,
          wind3: res.list[3].wind.speed,
          wind4: res.list[4].wind.speed,
          wind5: res.list[5].wind.speed,
          wind6: res.list[6].wind.speed,
          hour:  res.list[0].dt_txt,
          hour1: res.list[1].dt_txt,
          hour2: res.list[2].dt_txt,
          hour3: res.list[3].dt_txt,
          hour4: res.list[4].dt_txt,
          hour5: res.list[5].dt_txt,
          hour6: res.list[6].dt_txt,
          prop:  res.list[0].pop,
          prop1: res.list[1].pop,
          prop2: res.list[2].pop,
          prop3: res.list[3].pop,
          prop4: res.list[4].pop,
          prop5: res.list[5].pop,
          prop6: res.list[6].pop,
        };
        setForecast(oldForecast => [...oldForecast, forecast])
      }
      else {
        return 'Ciudad no encontrada'
      }
    });
  }

  function onFilter(ciudadId) {
    let ciudad = city.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
      return ciudad[0];
    }
    else {
      return null
    }
  }
  function onFilter2(ciudadId) {
    let forest = forecast.filter(c => c.id === parseInt(ciudadId));
    if(forest.length > 0) {
      return forest[0];
    }
    else {
      return null
    }
  }
  return (
    <div className="relative flex flex-col flex-wrap w-auto min-h-screen p-0 m-0">
      <Route path='/' render={()=> <NavBar onSearch={onSearch}/>}/>
      <Route exact path='/' render={() => <Cards city={city} onClose={onClose}/>}/> 
      <Route exact path ='/ciudad/:ciudadId' render={({match}) => <Detalle cities={onFilter(match.params.ciudadId)} forecast={onFilter2(match.params.ciudadId)}/>}/>
      <Route path='/' render={() => <Footer/>}/> 
    </div>
  )
}

export default App
