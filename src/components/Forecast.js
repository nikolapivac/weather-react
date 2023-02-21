import axios from 'axios'
import React, { useEffect, useState } from 'react';
import getDateFromInfo from "../utils/getDateFromInfo";
import setForecastIcons from "../utils/setForecastIcons";

const Forecast = ({cityName}) => {
    const [forecast, setForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e87b1d0df402ffef61de75ccb3df3f8a&units=metric`
        const fetch = async() => {
            const res = await axios(url);
            setForecast(res.data);
            setIsLoading(false);
        }
        fetch();

    }, [cityName])

    useEffect(() => {
        if(forecast.length !== 0){
            setForecastIcons(forecast.list[7], 1);
            setForecastIcons(forecast.list[15], 2);
            setForecastIcons(forecast.list[23], 3);
            setForecastIcons(forecast.list[31], 4);
            setForecastIcons(forecast.list[39], 5);
        }
    }, [forecast])

    const currentDate = new Date();

    if(isLoading){
        return <div>Loading Forecast...</div>
    }
    
    return(
        <div className='forecast'>
            <div className='day'>
                <h1 className='day1_title'>{getDateFromInfo(currentDate)}</h1>
                <i id="weekly_icon1"></i>
                <p id="day_temp1">{Math.round(forecast.list[7].main.temp)+"°"}</p>
            </div>
            <div className='day'>
                <h1 className='day2_title'>{getDateFromInfo(currentDate)}</h1>
                <i id="weekly_icon2"></i>
                <p id="day_temp2">{Math.round(forecast.list[15].main.temp)+"°"}</p>
            </div>
            <div className='day'>
                <h1 className='day3_title'>{getDateFromInfo(currentDate)}</h1>
                <i id="weekly_icon3"></i>
                <p id="day_temp3">{Math.round(forecast.list[23].main.temp)+"°"}</p>
            </div>
            <div className='day'>
                <h1 className='day4_title'>{getDateFromInfo(currentDate)}</h1>
                <i id="weekly_icon4"></i>
                <p id="day_temp4">{Math.round(forecast.list[31].main.temp)+"°"}</p>
            </div>
            <div className='day'>
                <h1 className='day5_title'>{getDateFromInfo(currentDate)}</h1>
                <i id="weekly_icon5"></i>
                <p id="day_temp5">{Math.round(forecast.list[39].main.temp)+"°"}</p>
            </div>
        </div>
    )
}

export default Forecast