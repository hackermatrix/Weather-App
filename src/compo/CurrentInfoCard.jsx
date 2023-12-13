import React from 'react'
import '../App.css'
import axios from 'axios';

const getData = async ()=>{
  const response = await axios.get("https://api.weatherapi.com/v1/forecast.json?q=Ahmednagar%2Cin&days=1&hour=5&key=5cadec3d7211419eb0c64922231312");
  return response.data
}

const getHourData = async ()=>{
  let dateobj = new Date();
  let apidate = `${dateobj.getFullYear()}-${dateobj.getMonth()}-${dateobj.getDay()}`;
  const response = await axios.get(`https://api.weatherapi.com/v1/history.json?q=Ahmednagar%2Cin&dt=${apidate}&key=5cadec3d7211419eb0c64922231312`);
  return response.data
}


const times = [9,12,15,18,21];
let data =  await getData();
let hourlyData = await  getHourData();

function CurrentInfoCard() {

  return (
    <div className='info-card'>
        <section className='inner-current-card'>
          <h3>Current Weather</h3>
          <br/>
          <section style={{display:"flex",justifyContent:'space-around'}}>
    
            <span style={{display:'flex',flexDirection:"column"}}>
              <span><strong>{data.location.name},{data.location.country}</strong></span>
              <span>{data.location.localtime}</span>
            </span>
    
            <span style={{display:'flex',flexDirection:"column"}}>
              <span><strong>{data.current.feelslike_c} <sup>o</sup>C</strong></span>
              <span>{data.current.condition.text}</span>
            </span>
    
            <span>
              <img src={data.current.condition.icon}></img>
            </span>
          </section>
        </section>

        <section className='inner-current-card'>
        <h3>Air Conditions</h3>
        <br/>
        <section style={{display:"flex",justifyContent:'space-around'}}>
          
            <span className='air-condition-card'>
                <span>Real Feel</span>
                <span><strong>{data.current.feelslike_c} <sup>o</sup>c</strong></span>
            </span>

            <span className='air-condition-card'>
                <span>Wind</span>
                <span><strong>{data.current.wind_mph} m/s</strong></span>
            </span>

            <span className='air-condition-card'>
                <span>UV </span>
                <span><strong>{data.current.uv} %</strong></span>
            </span>

            <span className='air-condition-card'>
                <span>Humidity</span>
                <span><strong>{data.current.humidity}%</strong></span>
            </span>
        </section>
        </section>
        <br/>

        <section className='inner-current-card'>
        <h3>Today's Forecast</h3>
        <br/>
        <section style={{display:'flex',justifyContent:"center"}}>
              {times.map((time)=>
              <span key="eg" className='today-forecast-card'>
              <span>{time}:00</span>
              <span><img  src={hourlyData.forecast.forecastday[0].hour[time].condition.icon}/></span>
              <span><strong>{hourlyData.forecast.forecastday[0].hour[time].temp_c}<sup>o</sup>C</strong></span>
              </span>
              )}


        </section>
        </section>
    </div>
  )
}

export default CurrentInfoCard