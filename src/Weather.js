import "./Weather.css";

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [cityValue, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      ready: true,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: response.data.temperature.time,
      icon: response.data.condition.icon_url,
    });
  }
  temperature: response.data.temperature.current,
    function searchCity() {
      const apiKey = "aac97fb2fbt9362853a0a43aca162o74";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    };

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
    //it will search for a city by making an api call//
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="inner-container">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="container-2">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      placeholder="Search for a city"
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control btn btn-primary shadow-sm"
                      id="search-text-input"
                      onChange={handleCityChange}
                    />
                  </div>

                  <div className="col-3">
                    <button
                      type="submit"
                      id="button2"
                      className="form-control btn btn-primary shadow-sm w-100"
                    >
                      Search
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="submit"
                      id="current"
                      className="form-control btn btn-success shadow-sm w-100"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <WeatherInfo info={weatherData} />
            <WeatherForecast />

            <small id="opensource">
              <a
                href="https://github.com/racheallove06/racheallove06.github.io"
                target="_blank"
              >
                Open source code
              </a>
              by, Racheal Muchiri
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
