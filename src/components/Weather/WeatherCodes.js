import React,{Component} from 'react';

class WeatherCodes extends Component{
    constructor(props){
        super(props);
        this.state={
            weatherCode: props.weathercode,
        }
    }
    WeatherCodeTranslate = () =>{
        console.log('Weathercode');
        console.log(this.state.weatherCode);
        switch(this.state.weatherCode)
        {
            case 0:
                return(
                "Weather: Clear"
                );
            case 1:
                return(
                "Weather: Mainly clear"
                );
            case 2:
                return(
                "Weather: Partly cloudy"
                );
            case 3:
                return(
                "Weather: Overcast"
                );
            case 45:
            case 48:
                return(
                "Weather: Fog"
                );
            case 51:
            case 53:
            case 55:
                return(
                "Weather: Drizzle"
                        );
            case 56:
            case 57:
                return(
                "Weather: Freezing Drizzle"
                        );
            case 61:
            case 63:
            case 65:
                return(
                "Weather: Rain"
                            );
            case 66:
            case 67:
                return(
                "Weather: Freezing rain"
                        );
            case 71:
            case 73:
            case 75:
                return(
                "Weather: Snow"
                        );
            case 77:
                return(
                "Weather: Snow grains"
                        );
            case 80:
            case 81:
            case 82:
                return(
                "Weather: Rain showers"
                        );
            case 85:
            case 86:
                return(
                "Weather: Snow showers"
                        );
            case 95:
                return(
                "Weather: Thunderstorm"
                        );
            case 96:
            case 99:
                return(
                "Weather: Thunderstorm with hail"
                        );
                default:
                return("WeatherCode: Broken")
        }
    }
}
 export default WeatherCodes;
