import React from "react";

export default function WeatherForecastDay() {
  return (
    <div class="weather-forecast-date">
      {forecast[0].time}
      <br />
      <WeatherIcon code={forecast[0].condition.icon_url} size={36} />
      <br />
      <div class="temperature-container">
        <span class="temperature temperature-1">
          {Math.round(forecast[0].temperature.maximum)}°
        </span>
        <span class="temperature temperature-2">
          {Math.round(forecast[1].temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
