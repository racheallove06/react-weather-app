import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row">
        <div class="col">
          <div class="weather-forecast-date">
            day
            <br />
            <WeatherIcon size={36} />
            <br />
            <div class="temperature-container">
              <span class="temperature temperature-1">17°</span>
              <span class="temperature temperature-2">24°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
