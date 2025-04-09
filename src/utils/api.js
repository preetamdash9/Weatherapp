import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Access the key from .env
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data; // Returns the weather data
  } catch (error) {
    throw error; // Throw an error if the request fails
  }
};
