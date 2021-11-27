import React from 'react';
import WeatherCodes from './WeatherCodes';
import WindDirection from './WindDirection';

import './WeatherNowSingleStyle.css'



const WeatherNowSingle = ({item}) =>(
    
    <div>
        <p className="temperature"><img src="/Images/Thermometer.png" alt="direction" className="image"/>Temperature: {item.temperature}°F</p>
        <p className="weatherCode"><img src="/Images/Cloud.png" alt="direction" className="image"/>{new WeatherCodes(item).WeatherCodeTranslate()}</p>
        <p className="windSpeed"><img src="/Images/Windsock.png" alt="direction" className="image"/>Wind speed: {item.windspeed} mph</p>
        <p className="windDirection">{new WindDirection(item).ArrowDirection()}Wind Direction: {item.winddirection}° {new WindDirection(item).WindDirectionTranslate()}</p>
    </div>
)




export default WeatherNowSingle;
