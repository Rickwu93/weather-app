import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const App = () => {
  const [cities, setCities] = useState(["London", "New York", "Tokyo"]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "your_api_key_here";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cities.join(",")}&units=metric&appid=${API_KEY}`;
      const result = await axios(url);
      setWeatherData(result.data.list);
    };
    fetchData();
  }, [cities]);

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        {cities.map((city) => (
          <button key={city} onClick={() => console.log(city)}>
            {city}
          </button>
        ))}
      </div>
      <div>
        {weatherData.map((data) => (
          <Weather key={data.dt} city={data.city.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
