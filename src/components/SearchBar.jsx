import React, { useState } from 'react';
import { fetchWeather } from '../utils/api';
import WeatherCard from './WeatherCard';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(`City not found: ${city}`);
      setWeatherData(null);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="input-field"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default SearchBar;
