import React from 'react'

const InfoCardOne = ({weatherInfo}) => {
  return (
    <div className='info_card1'>
        <div className='feels_like'>
            <h2 className='ic1_title'>Feels Like</h2>
            <h1 className='ic1_content'>{Math.round(weatherInfo.main.feels_like)+"°"}</h1>
        </div>
        <div className='humidity'>
            <h2 className='ic1_title'>Humidity</h2>
            <h1 className='ic1_content'>{weatherInfo.main.humidity+" %"}</h1>
        </div>
        <div className='pressure'>
            <h2 className='ic1_title'>Pressure</h2>
            <h1 className='ic1_content'>{weatherInfo.main.pressure+" hPa"}</h1>
        </div>
        <div className='wind_speed'>
            <h2 className='ic1_title'>Wind Speed</h2>
            <h1 className='ic1_content'>{Math.round(weatherInfo.wind.speed)+" km/h"}</h1>
        </div>
    </div>
  )
}

export default InfoCardOne