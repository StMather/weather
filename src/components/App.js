import React,{Component} from 'react';
import './App.css';
import WeatherNow from './Weather/WeatherNow';

class App extends Component {
 constructor(props){
   super(props);
   this.state ={
     mosesLake:{
       lat:'47.130',
       lon:'-119.27'
     }
   };
 }
  
render(){
  return (
    <div className="App">
      <h1 className="App-header">Moses Lake Weather</h1>
      <div className="grid">
        <WeatherNow location={this.state.mosesLake}/>
      </div>
    </div>
  );
}

}
export default App;
