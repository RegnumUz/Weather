import React, { useState } from "react";

import './index.css'

const Search = ({ searchCity }) => {
  const [currentCity, setCurrentCity] = useState("Tashkent");

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="search">
        <input
          className="search_input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled
        />
  
    </div>
  );
}

export default Search;