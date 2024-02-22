/* eslint-disable react/prop-types */
import "./Weather.css";
import clear from "../assets/images/clear.png";
import clouds from "../assets/images/clouds.png";
import drizzle from "../assets/images/drizzle.png";
import mist from "../assets/images/mist.png";
import rain from "../assets/images/rain.png";
import snow from "../assets/images/snow.png";

import { useEffect, useState } from "react";

const Weather = ({data} ) => {

  const [weatherImg, setWeatherImg] = useState({});
  const [dataDescription, setDataDescription] = useState();

  const {name, countryName, temp, weatherName, description} = data;

  useEffect(() => {
    if(weatherName[0] === 'Clouds'){
      setWeatherImg(clouds)
      setDataDescription(description)
    } else if (weatherName[0] === 'Clear') {
      setWeatherImg(clear)
      setDataDescription(description)
    } else if (weatherName[0] === 'Drizzle') {
      setWeatherImg(drizzle)
      setDataDescription(description)
    } else if (weatherName[0] === 'Mist') {
      setWeatherImg(mist)
      setDataDescription(description)
    } else if (weatherName[0] === 'Rain') {
      setWeatherImg(rain)
      setDataDescription(description)
    } else if (weatherName[0] === 'Snow') {
      setWeatherImg(snow)
      setDataDescription(description)
    }

  }, [description, weatherName])

  let tempData = Math.round(temp);
  let celcius = '°C'

  return (
    <div className="weather_container">
      <div className="weather_wrapper">
        <h2 className="country_name">{`${name}, ${countryName}`}</h2>
        <img src={weatherImg} alt={dataDescription} />
        <h3 className="weather_temp">{tempData}{celcius}</h3>
        <p className="weather_text">{weatherName}</p>
      </div>
    </div>
  )
};

export default Weather;
