import Form from './components/Form';
import './index.css';
import { useState } from 'react';
import { weatherAPIOptions, BASE_URL, API_KEY } from "./utils/api";
import Weather from './components/Weather';

const App = () => {

  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [displayWeatherComp, setDisplayWeatherComp] = useState(false);

  const onSubmit = async (country, isError) => {
    try {

      if(country === ''){
        return isError;
      }

      setIsLoading(!isLoading) // true

      await fetch(`${BASE_URL}${country}${API_KEY}`, weatherAPIOptions)
      .then((response) => response.json())
      .then((result) => {
        setWeatherData(() => {
          return {
            name: result.name,
            temp: result.main.temp,
            countryName: result.sys.country,
            description: result.weather.map((i) => { return i.description} ),
            weatherName: result.weather.map((i) => { return i.main} )
          }
        })
      })
      setDisplayWeatherComp(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading);
    }
  };
  
  return (
    <div className="app_main">
      <div className="container">
        <h1 className="app_heading">Weather App</h1>
        <Form getData={onSubmit}/>
        {isLoading && <p style={{textAlign: 'center'}}>Loading...</p>}
        {displayWeatherComp && (
        <Weather data={weatherData}/>
      )}
      </div>
    </div>
  )
}

export default App