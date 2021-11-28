import React, {Component} from 'react';
import axios from "axios";


class SevenDay extends Component {
  state = {
    dailyTemps: [],
  }

  constructor(props) {
    super(props);

    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.props.location.lat}&longitude=${this.props.location.lon}&daily=temperature_2m_max,temperature_2m_min&timezone=America/Los_Angeles&temperature_unit=fahrenheit`)
      .then((res) => {
        let dailyTemps = [];
        for (let index = 0; index < res.data.daily.temperature_2m_max.length; index++) {
          dailyTemps[index] = {
            'minTemp' : res.data.daily.temperature_2m_min[index],
            'maxTemp' : res.data.daily.temperature_2m_max[index],
            'time' : res.data.daily.time[index]
          }
        }
        console.log(dailyTemps)
        this.setState({dailyTemps: dailyTemps})
      })
  }

  

  render() {
    return (
      <div className="SevenDay">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Icon</th>
              <th>Min Temp</th>
              <th>Max Temp</th>
            </tr>
          </thead>
          
  
          <tbody>
            {this.state.dailyTemps.map(temp => 
                <tr>
                  <td>{temp.time}</td>
                  <td><img src="https://via.placeholder.com/25x25" alt="{temp.time} image" /></td>
                  <td>{temp.minTemp}</td>
                  <td>{temp.maxTemp}</td>
                </tr>)}
          </tbody>

          
          
  
        </table>
      </div>
    );
  }
}

export default SevenDay;