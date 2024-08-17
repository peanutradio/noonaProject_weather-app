import React from 'react';

const WeatherBox = ({ weather }) => {
  console.log("weather??", weather);

  return (
    <div className='weather-box' style={{ color:'white'}}>
      <div style={locationStyle}>{weather?.name}</div>
      <h1>
        {weather?.main.temp?.toFixed(1)}°C {' '}
        {weather?.main.temp ? ((weather.main.temp * 1.8 + 32).toFixed(1) + '°F') : 'N/A'} {' '}
        {weather?.main.humidity}%
      </h1>
      <h2>{weather?.weather[0].description || '날씨 정보 없음'}</h2>
    </div>
  );
};

export default WeatherBox;

const locationStyle = {
  fontSize: '2.5em',
  fontWeight: 'bold',
  marginBottom: '10px',
};
