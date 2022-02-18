import React from "react";

import "./index.css";

export default function Forecast({ weatherInfo, date }) {
  return (
    <div className="weatherNow">
      <div>
        <img
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.weather[0].main}
        />
      </div>
      <div className=" d-flex justify-content-center align-items-center flex-column">
        <h1>TODAY</h1>

        <div>
          <span>
            {Math.round(weatherInfo.temp.max)}
            <sup>°</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
