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
              <WeatherIcon code={props.info.icon} size={56} />
            </span>
            <WeatherTemperature celsius={props.info.temperature} />
          </h1>
        </div>
        <div className="col">
          <ul>
            <li>Humidity:{props.info.humidity}</li>
            <li>Wind:{props.info.wind}km/hr</li>
          </ul>
        </div>
        <div className="col description-sec">
          <ul>
            <li>{props.info.city}</li>
            <li>
              <FormattedDate />
            </li>
            <li>{props.info.description}</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>{" "}
    </div>
  );
}
