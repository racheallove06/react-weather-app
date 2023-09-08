import "./styles.css";

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  function showTemperature(response) {
    console.log(response.data);
    let temperature = response.data.temperature.current;
    let description = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.condition.icon_url;

    let weatherInfo = {
      temperature,
      description,
      humidity,
      wind,
      icon,
    };

    setWeatherData(weatherInfo);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aac97fb2fbt9362853a0a43aca162o74";
    let cityInput = event.target.elements.city.value;
    setCity(cityInput);
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a city" name="city" />
        <input type="submit" />
      </form>
      {city && weatherData ? ( // Check if city is defined and weatherData is available
        <ul>
          <li>Temperature: {Math.round(weatherData.temperature)}°C</li>
          <li>Description: {weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
          <li>
            <img src={weatherData.icon} alt="icon" />
          </li>
        </ul>
      ) : null}{" "}
      {/* Render nothing if city is undefined */}
    </div>
  );
}
