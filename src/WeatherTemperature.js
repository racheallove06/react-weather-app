import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="weathertemp">
      <span id="celsius">{Math.round(props.info.temperature)}</span>
      <span className="degree">
        <a href="#" id="celcius-link" className="active">
          ⁰C |{" "}
        </a>
        <a href="#" id="faren-link">
          {" "}
          ⁰F
        </a>
      </span>{" "}
    </span>
  );
}
