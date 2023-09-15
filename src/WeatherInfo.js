import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="root">
      <div className="row" id="row-2">
        <div className="col-4">
          <h1>
            <span>
              {" "}
              <img id="weather-icon" src="" alt="" />{" "}
            </span>
            <span id="celsius">{Math.round(props.info.temperature)}</span>
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
            <li id="humidity">Humidity:{props.info.humidity}</li>
            <li id="wind">Wind:{props.info.wind}</li>
          </ul>
        </div>
        <div className="col-4">
          <div>
            <div id="city">{props.info.city}</div>
            <p className="time" id="time-element">
              <FormattedDate />
              <br />
            </p>
            <div id="description">{props.info.description}</div>
          </div>
        </div>
      </div>
      <div>
        <span className="temp">Temperature</span>
        <span>|</span>
        <span className="precipitation">Precipitation</span>
        <span>|</span>
        <span className="wind">Wind</span>
      </div>
      <div className="weather-forecast" id="forecast"></div>{" "}
    </div>
  );
}
