 import { useState } from "react";
 import './WeatherApp.css';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function WeatherApp(){

     let [weatherInfo, setWeatherInfo]=useState(
        {
            city:"mumbai",
            weather:"haze",
            temp:28,
            temp_max:30,
            temp_min:27,
            feels_like:28,
            humidity:23,
            pressure:232,
        
        
           }
     );

     let updateInfo= (newInfo)=>{
       
        setWeatherInfo(newInfo);

     };

    return(
        <div className="WeatherApp">
        <h2>Weather App By Untolders</h2>
   
       <SearchBox updateInfo={updateInfo}/>
       <br/>
       <InfoBox info={weatherInfo}/>




        </div>
    );
}