import React from 'react';

const WeatherCard = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2 className="city-name">{data.name}</h2>
      <p className="update-time">Updated at: {new Date().toLocaleTimeString()}</p>
      <img src={iconUrl} alt={data.weather[0].description} className="weather-icon" />
      <h3 className="temperature">{data.main.temp}°C</h3>
      <p className="condition">{data.weather[0].main}</p>
      <div className="details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} km/h</p>
        <p>Clouds: {data.clouds.all}%</p>
      </div>
      <p className="min-max">Min/Max Temp: {data.main.temp_min}°C / {data.main.temp_max}°C</p>
    </div>
  );
};

export default WeatherCard;
