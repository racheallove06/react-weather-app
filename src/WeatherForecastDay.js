import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return daysOfWeek[day];
  }
  return (
    <div class="weather-forecast-date">
      {day()}
      <br />
      <div className="forecast-image mb-2">
        {" "}
        <WeatherIcon code={props.data.condition.icon} size={36} />{" "}
      </div>

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
