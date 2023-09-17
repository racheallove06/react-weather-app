import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div class="row">
          <div class="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let key = "aac97fb2fbt9362853a0a43aca162o74";
    let city = props.info.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
