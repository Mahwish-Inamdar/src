import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city]);

  return (
    <div className="weather">
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
