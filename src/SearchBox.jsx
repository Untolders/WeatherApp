import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'


function SearchBox({updateInfo}){
    let [cityName, setCityName]=useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    
    const API_KEY="3aa57cc8fc9afdadce542848c9ccdb54";
  
   let getWeatherInfo= async () =>{

 try{let response= await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);

 let JSONResponse = await  response.json();

 console.log(JSONResponse);

 let result={
  city:cityName,
  weather:JSONResponse.weather[0].description,
  temp:JSONResponse.main.temp,
  temp_max:JSONResponse.main.temp_max,
  temp_min:JSONResponse.main.temp_min,
  feels_like:JSONResponse.main.feels_like,
  humidity:JSONResponse.main.humidity,
  pressure:JSONResponse.main.pressure,


 };

 console.log(result);
 return result;
} catch (err) {
    
    throw(err);
}
   
   
   };   

   let handleChange=(event)=>{
      
    setCityName(event.target.value);
   };

   let handleSubmit= async ()=>{
    try{ let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
          setCityName("");
          setError(false);
        } catch (err) {
            setError(true);
          
        }
      
   
   }


    return(
        <div className='SearchBox'>
            <h3>Search for City weather</h3>

            <form>
            <TextField 
            id="cityName"
            label="City Name" 
            variant="outlined" 
            onChange={handleChange}
            value={cityName} 
            required
            />

            <br/>
            <br/>
            <Button variant="contained"  onClick={handleSubmit}>Search</Button>
            
            {error? <p style={{color:"red"}}>No Such Place Exist in Our DataBase!</p>:""}
            </form>


           
        </div>
    );
}


export default SearchBox;