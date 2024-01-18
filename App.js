import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import Weather from './Weather';
import Forecast from './Forecast';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');

  const getWeather = (city) => {
    setCity(city);
  };

  return (
    <div className="app">
      <h1>Stylish Weather App</h1>
      <WeatherForm getWeather={getWeather} />
      <Weather city={city} />
      <Forecast city={city} />
    </div>
  );
};

export default App;
