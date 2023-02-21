import React from "react";
import getTodaysDate from "../utils/getTodaysDate";
import getTime from "../utils/getTime";

const CityTemp = ({weatherInfo}) => {
    return(
        <div className="main_card">
            <div className="citystate">
                <h1 className="city_name">{weatherInfo.name}</h1>
                <h3 className="state_name">{weatherInfo.sys.country}</h3>
            </div>
            <h1 className="temperature">{Math.round(weatherInfo.main.temp)+"°"}</h1>
            <div className="date_and_time">
                <p className="current_date">{getTodaysDate(weatherInfo)}</p>
                <p className="current_time">{getTime(weatherInfo)+" h"}</p>
            </div>
        </div>
    )
}

export default CityTemp;