import React from "react";

import './index.css'

export default function Forecast({ weatherInfo, date }) {
  return (
    <div className="weatherWeek d-flex justify-content-center align-items-center flex-column">
      <h1>{[date[0], date[1], date[2]]}</h1>
      <img
        src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"
        }
        alt={weatherInfo.weather[0].main}
      />
      <div >
        <span >
          {Math.round(weatherInfo.temp.max)}
          <sup>°</sup>
        </span>
      </div>
    </div>
  );
}
