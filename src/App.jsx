import React, { useState } from "react";
import axios from "axios";

function App() {
    // State variables
    const [city, setCity] = useState(""); // Tracks user input
    const [weather, setWeather] = useState(null); // Tracks fetched weather data
    const [loading, setLoading] = useState(false); // Tracks loading status
    const [error, setError] = useState(null); // Tracks errors

    // Function to fetch weather data
    const getWeather = async () => {
        const apiKey = "e49bf903ff9a966b43dc45eba6022994"; // Replace with your valid API key
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            setLoading(true); // Enable loading
            setError(null);   // Clear errors
            const response = await axios.get(URL); // API call
            setWeather(response.data); // Save API response in state
        } catch (err) {
            setError("Failed to fetch weather. Please try again."); // Handle error
        } finally {
            setLoading(false); // Disable loading
        }
    };

    // JSX for rendering the UI
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {/* Search Bar */}
            <div>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} // Update input state
                />
                <button onClick={getWeather}>Search</button>
            </div>

            {/* Loader */}
            {loading && <p>Loading...</p>}

            {/* Error Message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Weather Info Card */}
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} km/h</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                    />
                </div>
            )}
        </div>
    );
}

export default App;
