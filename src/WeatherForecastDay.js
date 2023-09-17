import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  console.log("WeatherForecastDay", props.data.condition.icon);
  return (
    <div class="weather-forecast-date">
      {props.data.time}
      <br />
      <WeatherIcon code={props.data.condition.icon} size={40} />
      <br />
      <div class="temperature-container">
        <span class="temperature temperature-1">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span class="temperature temperature-2">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
