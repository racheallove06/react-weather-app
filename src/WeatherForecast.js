import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  apiKey = "aac97fb2fbt9362853a0a43aca162o74";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query={query}&key={key}`;
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
