import React, { useEffect, useState } from "react";
import CityTemp from "./CityTemp";
import Search from "./Search";
import axios from "axios";
import WeatherDesc from "./WeatherDesc";
import InfoCardOne from "./InfoCardOne";
import InfoCardTwo from "./InfoCardTwo";
import Forecast from "./Forecast";
import setMainIcon  from '../utils/setMainIcon'

const Main = () => {
    const [weatherInfo, setWeatherInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState("true");

    useEffect(() => {
        let url;
        if(searchTerm === ""){
            url = `https://api.openweathermap.org/data/2.5/weather?q=Makarska&APPID=e87b1d0df402ffef61de75ccb3df3f8a&units=metric`;
        } else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=e87b1d0df402ffef61de75ccb3df3f8a&units=metric`
        }

        const fetch = async() => {
            const res = await axios(url);
            setWeatherInfo(res.data);
            setIsLoading(false);
        }
        fetch();
    }, [searchTerm])

    useEffect(() => {
        if(weatherInfo.length !== 0){
            setMainIcon(weatherInfo);
        }
    }, [weatherInfo])

    const handleInputSubmit = (inputValue) => {
        setSearchTerm(inputValue);
    }

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="main_container">
            <Search onSubmit={handleInputSubmit}/>
            <div className="weather_content">
                <CityTemp weatherInfo={weatherInfo} />
                <WeatherDesc weatherInfo={weatherInfo} />
                <InfoCardOne weatherInfo={weatherInfo} />
                <InfoCardTwo weatherInfo={weatherInfo} />
                <Forecast cityName={weatherInfo.name} />
            </div>
        </div>
    )
}

export default Main;