import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiKey = '7e359d97fdfc1bc2bf8c8442cc52826a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => setForecastData(response.data))
      .catch(error => console.error('Error fetching forecast data:', error));
  }, [city]);

  return (
    <div className="forecast">
      {forecastData && (
        <div>
          <h2>5-Day Forecast</h2>
          {forecastData.list.map(item => (
            <div key={item.dt} className="forecast-item">
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>Temperature: {item.main.temp} &deg;C</p>
              <p>Weather: {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forecast;
