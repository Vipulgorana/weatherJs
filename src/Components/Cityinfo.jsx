import React from 'react';
import location from "../icons/location.svg"

const CityInfo = ({city}) =>{
  return(
  <div className="city-info"><img src={location} alt="Location" className="location-ping"/>{city}</div>
  )
}

export default CityInfo