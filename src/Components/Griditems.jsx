import React from 'react';

const GridItems = ({weather}) =>{

  return(<>
    <div className="grid-item">
      <span className="label">Description </span>
      <span className="content">{weather.description}</span>
    </div>
    <div className="grid-item">
      <span className="label">Temperature </span>
      <span className="content">{weather.temp} &#8451;</span>
    </div>
    <div className="grid-item">
      <span className="label">Wind-speed </span>
      <span className="content">{weather.wind}</span>
    </div>
    <div className="grid-item">
      <span className="label">Feels like </span>
      <span className="content">{weather.feels_like} &#8451;</span>
      </div>
    </>
  )
}

export default GridItems