import React from "react";

const Weather = ({ city }) => {
  return (
    <div>
      <h2>{city}</h2>
      {/* Display weather data here */}
    </div>
  );
};

export default Weather;