import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="weather-button">
      {/* 현재 위치 버튼 */}
      <Button
        variant={selectedCity === "current" ? "Info" : "outline-info"}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      
      {/* 도시 목록 버튼 */}
      {cities.map((city) => (
        <Button
          key={city}
          variant={selectedCity === city ? "info" : "outline-info"}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;