import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="root">
      <div className="row" id="row-2">
        <div className="col">
          <h1>
            <span className="icon">
              {" "}
              <WeatherIcon code={props.info.icon} />
            </span>
            <WeatherTemperature celsius={props.info.temperature} />
          </h1>
        </div>
        <div className="col">
          <ul>
            <li id="humidity">Humidity:{props.info.humidity}</li>
            <li id="wind">Wind:{props.info.wind}</li>
          </ul>
        </div>
        <div className="col">
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
