import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
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
            <div class="weather-forecast-date">
              {forecast[0].time}
              <br />
              <WeatherIcon code={forecast[0].condition.icon_url} size={36} />
              <br />
              <div class="temperature-container">
                <span class="temperature temperature-1">
                  {Math.round(forecast[0].temperature.maximum)}°
                </span>
                <span class="temperature temperature-2">
                  {Math.round(forecast[1].temperature.minimum)}°
                </span>
              </div>
            </div>
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
