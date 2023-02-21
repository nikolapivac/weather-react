import React, { useEffect } from 'react'

const WeatherDesc = ({weatherInfo}) => {
  return (
    <div className='weather_desc_card'>
        <div className='descicon'>
            <h1 className='main_desc'>{weatherInfo.weather[0].main}</h1>
            <i id="main_icon"></i>
        </div>
        <h4 className='detail_desc'>{weatherInfo.weather[0].description}</h4>
    </div>
  )
}

export default WeatherDesc