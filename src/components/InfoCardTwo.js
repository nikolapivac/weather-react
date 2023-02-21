import React from 'react'
import getTimeFromUnix from '../utils/getTimeFromUnix'

const InfoCardTwo = ({weatherInfo}) => {
  return (
    <div className='info_card2'>
        <div className='sunrise'>
            <h2 className='ic2_title'>Sunrise:</h2>
            <p className='ic2_content' id="sunrise">{getTimeFromUnix(weatherInfo, "rise")+" h"}</p>
        </div>
        <div className='sunset'>
            <h2 className='ic2_title'>Sunset:</h2>
            <p className='ic2_content' id="sunset">{getTimeFromUnix(weatherInfo, "set")+" h"}</p>
        </div>
        <div className='maxtemp'>
            <h2 className='ic2_title'>Max:</h2>
            <p className='ic2_content' id="maxtemp">{Math.round(weatherInfo.main.temp_max)+"°"}</p>
        </div>
        <div className='mintemp'>
            <h2 className='ic2_title'>Min:</h2>
            <p className='ic2_content' id="mintemp">{Math.round(weatherInfo.main.temp_min)+"°"}</p>
        </div>
    </div>
  )
}

export default InfoCardTwo