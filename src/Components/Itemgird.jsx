import React from 'react';
import GridItems from './Griditems'
const ItemGrid = ({weather}) =>{
  return(<div className="grid-container"><GridItems weather={weather} /></div>)
}

export default ItemGrid