import React,{Component} from 'react';

class WindDirection extends Component{
    constructor(props){
        super(props);
        this.state={
            windDirection: props.winddirection,
        }
    }
    WindDirectionTranslate = () =>{
        console.log("WindDirection");
        console.log(this.state.windDirection);
        if(this.state.windDirection >= 351 || this.state.windDirection <=10)
        {
            return("North")
        }
        else if(this.state.windDirection >= 11 && this.state.windDirection <= 80)
        {
        return("North East")
        }
        else if(this.state.windDirection >= 81 && this.state.windDirection <= 100)
        {
        return("East")
        }
        else if(this.state.windDirection >= 101 && this.state.windDirection <= 170)
        {
        return("South East")
        }
        else if(this.state.windDirection >= 171 && this.state.windDirection <= 190)
        {
        return("South")
        }
        else if(this.state.windDirection >= 191 && this.state.windDirection <= 260)
        {
        return("South West")
        }
        else if(this.state.windDirection >= 261 && this.state.windDirection <= 280)
        {
        return("West")
        }
        else if(this.state.windDirection >= 281 && this.state.windDirection <= 350)
        {
        return("North West")
        }
        else{
            return("Direction error please fix Wind Direction")
        }
        
    }
    ArrowDirection = () =>{
        var direction = "upArrow";
        if(this.state.windDirection >= 351 || this.state.windDirection <=10)
        {
            direction = "NArrow";
        }
        else if(this.state.windDirection >= 11 && this.state.windDirection <= 80)
        {
            direction = "NEArrow";
        }
        else if(this.state.windDirection >= 81 && this.state.windDirection <= 100)
        {
            direction = "EArrow";
        }
        else if(this.state.windDirection >= 101 && this.state.windDirection <= 170)
        {
            direction = "SEArrow";
        }
        else if(this.state.windDirection >= 171 && this.state.windDirection <= 190)
        {
            direction = "SArrow";
        }
        else if(this.state.windDirection >= 191 && this.state.windDirection <= 260)
        {
            direction = "SWArrow";
        }
        else if(this.state.windDirection >= 261 && this.state.windDirection <= 280)
        {
            direction = "WArrow";
        }
        else if(this.state.windDirection >= 281 && this.state.windDirection <= 350)
        {
            direction = "NWArrow";
        }
        else{
            return("Direction error please fix Wind Direction")
        }
        console.log(direction);
        return(
        <img src="/Images/Arrow.png" alt="direction" className={direction}/>
        )
    }
}
 export default WindDirection;
