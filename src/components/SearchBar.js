import React from 'react'

const SearchBar = () => {
  return (
       
    <div className="darksoul-search-bar">
       
        <img className="search-icon" src="https://darksoul-codepen.github.io/search-icon.png" width="50" height="50" />
        <input type={'text'} name="search" placeholder="Search Film Names" className="darksoul-search-input" autocomplete="on" onChange={(e)=>console.log(e.nativeEvent.data)}/>
    </div>



  )
}

export default SearchBar