import "./Weather.css";

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);
  function handleSubmit(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      ready: true,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="inner-container">
            <form id="search-form">
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

            <div className="row" id="row-2">
              <div className="col-4">
                <h1>
                  <span>
                    {" "}
                    <img id="weather-icon" src="" alt="" />{" "}
                  </span>
                  <span id="celsius">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="degree">
                    <a href="#" id="celcius-link" className="active">
                      ⁰C |{" "}
                    </a>
                    <a href="#" id="faren-link">
                      {" "}
                      ⁰F
                    </a>
                  </span>
                </h1>
              </div>
              <div className="col-4">
                <ul>
                  <li id="humidity">Humidity:{weatherData.humidity}</li>
                  <li id="wind">Wind:{weatherData.wind}</li>
                </ul>
              </div>
              <div className="col-4">
                <p3>
                  <div id="city">{weatherData.city}</div>
                  <p className="time" id="time-element">
                    Time
                    <br />
                  </p>
                  <div id="description">{weatherData.description}</div>
                </p3>
              </div>
            </div>

            <p2>
              <span className="temp">Temperature</span>
              <span>|</span>
              <span className="precipitation">Precipitation</span>
              <span>|</span>
              <span className="wind">Wind</span>
            </p2>
            <div className="weather-forecast" id="forecast"></div>

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
