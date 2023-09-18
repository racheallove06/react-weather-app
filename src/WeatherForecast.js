import React, { useState, useEffect } from "react";
import "./Weather.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.info.city]);

  function handleResponse(response) {
    //Once the API response is received, the handleResponse function is called

    setForecast(response.data.daily); //weather forecast data is set using
    setLoaded(true); //. This triggers a re-render of the component.
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast weather-forecast">
        <div className="row forecastt  ">
          <div className="col forecol">
            <WeatherForecastDay data={forecast[1]} />
          </div>

          <div class="col forecol">
            <WeatherForecastDay data={forecast[2]} />
          </div>

          <div class="col forecol">
            <WeatherForecastDay data={forecast[3]} />
          </div>

          <div class="col forecol">
            <WeatherForecastDay data={forecast[4]} />
          </div>

          <div class="col forecol">
            <WeatherForecastDay data={forecast[5]} />
          </div>

          <div class="col forecol">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    //loading state
    //it initiates an API request to retrieve the weather data using Axios.//
    let key = "aac97fb2fbt9362853a0a43aca162o74";
    let city = props.info.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`; //sets up the API URL with the desired city and API key.
    // sends an HTTP GET request to the API using
    axios.get(apiUrl).then(handleResponse);
    return null; //hile waiting for the response, it returns null
  }
}
