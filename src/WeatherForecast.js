import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
  }

  if (loaded) {
    let key = "aac97fb2fbt9362853a0a43aca162o74";
    let city = props.info.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div class="row">
          <div class="col">
            <div class="weather-forecast-date">
              day
              <br />
              <WeatherIcon size={36} />
              <br />
              <div class="temperature-container">
                <span class="temperature temperature-1">17°</span>
                <span class="temperature temperature-2">24°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
