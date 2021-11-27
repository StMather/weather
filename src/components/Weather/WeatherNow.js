import React, {Component} from 'react';
import WeatherNowSingle from './WeatherNowSingle';
import Error from './Error';


class WeatherNow extends Component{
    constructor(props){
        super(props);
        this.state ={
            weather:[],
            error: true,
        };
    }

    componentDidMount(){
        console.log(this.props.location.lat);
        console.log(this.props.location.lon);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.props.location.lat}&longitude=${this.props.location.lon}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`

        fetch(url)
        .then((responce) =>{
            return responce.json();
        })
        .then((data) => {
            this.setState({
                weather: data,
                error: false
            })
        })
        .catch((error) => {
            this.setState({
                error:true
            })
        });
    }

    render() {
        if(!this.state.error){
            console.log(this.state.weather);
            return(
                <WeatherNowSingle item={this.state.weather.current_weather}/>
            )
        }

        else{
            return<Error/>
        }
    }
}

export default WeatherNow;
