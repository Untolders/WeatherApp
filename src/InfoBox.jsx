import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
export default function InfoBox({info}) {
 
   let Cold_URL="https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let Clear_URL="https://images.unsplash.com/photo-1713669374514-b9a16aba44d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYXIlMjBkYXl8ZW58MHx8MHx8fDA%3D"
   let Hot_URL="https://images.unsplash.com/photo-1622758342664-ce796582e479?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let Rain_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   

 
  return (
    <div className="InfoBox">
        
        <div className="InfoCard">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80 ? Rain_URL:info.temp >=30 ? Hot_URL:info.temp>10?Clear_URL: Cold_URL}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ?
           <ThunderstormIcon color="primary"/>
           :info.temp >=30 ? 
           <LocalFireDepartmentIcon color="error"/>
           :info.temp>10?
           <WbSunnyIcon color="warning"/>:
            <AcUnitIcon color="primary"/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
         <div>Weather: {info.weather}</div>
         <div>temperature: {info.temp}&deg;C</div>
         <div>Temp_Max: {info.temp_max}&deg;C </div>
         <div>Temp_Min: {info.temp_min}&deg;C </div>
         <div>Humidity: {info.humidity} </div>
         <div>Pressure: {info.pressure} </div>
        </Typography>
      </CardContent>
   
    </Card>
    </div>
    </div>
  );
}
