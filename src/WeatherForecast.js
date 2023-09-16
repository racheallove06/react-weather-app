import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row">
        <div class="col">
          <div class="weather-forecast-date">
            ${formatDay(forecastDay.time)}
            <br />
            <WeatherIcon />
            <img src="" class="forecast-image" />
            <br />
            <div class="temperature-container">
              <span class="temperature temperature-1">
                ${Math.round(forecastDay.temperature.maximum)}°
              </span>
              <span class="temperature temperature-2">
                ${Math.round(forecastDay.temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
