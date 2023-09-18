import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="weathertemp">
        <span id="celsius">{Math.round(props.celsius)}</span>
        <span className="degree">
          <a
            href="#"
            id="celcius-link"
            className="active"
            onClick={showFahrenheit}
          >
            ⁰C |{" "}
          </a>
          <a href="#" id="faren-link">
            {" "}
            ⁰F
          </a>
        </span>{" "}
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="weathertemp">
        <span id="celsius">{Math.round(fahrenheit)}</span>
        <span className="degree">
          <a
            href="#"
            id="celcius-link"
            className="active"
            onClick={showCelsius}
          >
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
}
