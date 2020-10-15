import React from 'react';

const SearchBar = ({handleInput}) =>{
  return(<input className="search" placeholder="enter your location" onChange={handleInput}/>)
}

export default SearchBar