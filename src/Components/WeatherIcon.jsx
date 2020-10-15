import React from 'react';

const WeatherIcon = ({icon}) => {
  const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return(<img src={imageUrl} alt="weather icon" className="weather-icon" />)
}

export default WeatherIcon