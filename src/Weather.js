import "./Weather.css";

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data.temperature.time);

    setWeatherData({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      ready: true,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: response.data.temperature.time,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="inner-container">
            <form id="search-form" onChange={handleSubmit}>
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
    const apiKey = "aac97fb2fbt9362853a0a43aca162o74";
    let city = "Nairobi";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }
  return "Loading...";
}
