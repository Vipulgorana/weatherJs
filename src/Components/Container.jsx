import React,{ useEffect,useState } from 'react';
import SearchBar from "./Searchbar"
import ItemGrid from "./Itemgird" 
import CityInfo from "./Cityinfo"
import Services from "../Services"
import ShowError from './ShowError';
import WeatherIcon from "./WeatherIcon"


const Container = () =>{

  const [city,setCity] = useState()
  const [weather,setWeather]=useState({})
  const [err,setErr]=useState(false)
  const [query,setQuery]=useState('ahmedabad')
  useEffect(()=>{
    console.log("effect")
    Services
      .getWeather(query)
      .then((details)=>{
        const cityWeather = {
          description:details.weather[0].description,
          temp:details.main.temp,
          wind:details.wind.speed,
          feels_like:details.main.feels_like,
          icon:details.weather[0].icon
        }
        setWeather(cityWeather)
        setCity(`${details.name},${details.sys.country}`)
        setErr(false)
      })
      .catch(err=>{
        setErr(true)
      })
  },[query])

  
  const handleInput = (e) =>{
    setQuery(e.target.value)
   }

   const errorHandler = err ? <ShowError /> : (<><CityInfo city={city}  /><ItemGrid weather={weather} /><WeatherIcon icon={weather.icon} /></>)

  return(<div className="main-container">
    <SearchBar handleInput={handleInput} />
    {errorHandler}
  </div>)
}

export default Container;