import React, { useState } from 'react';
import './WeatherForm.css';

const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
