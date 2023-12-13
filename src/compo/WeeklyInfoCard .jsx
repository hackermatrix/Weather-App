import React from 'react'
import '../App.css'
import axios from 'axios';

function getPrevDates(days){
  var date = new Date();
  var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  var day =last.getDate();
  var month=last.getMonth()+1;
  var year=last.getFullYear();
  return `${year}-${month}-${day}`
  }
  


const getData = async ()=>{
  const response = await axios.get(`https://api.weatherapi.com/v1/history.json?q=Ahmednagar%2Cin&dt=${getPrevDates(6)}&end_dt=${getPrevDates(1)}&key=5cadec3d7211419eb0c64922231312`);
  return response.data
}




function WeeklyInfoCard () {
  return (
    <section className='info-card'>
        <h3>Weekly Weather</h3>
        <WeekCard/>
    </section>
  )
}



let data = await getData();
let weekdata = data.forecast.forecastday;

function WeekCard() {

  return (
    <>
      {weekdata.map((day)=>
        <section key="test"className='week-card'>

        <section className='inner-week-card'>
        <span><strong>{new Date(day.date).toLocaleDateString(undefined, { weekday: 'long' })}</strong></span>

        <span style={{display:"flex",alignItems:"center"}}>
          <img style={{height:"60%"}} src={day.day.condition.icon}/>
          <span>{day.day.condition.text}</span>
        </span>
        
        </section>
  
        <section className='inner-week-card'>
          <span><strong>{day.day.avgtemp_c}<sup>o</sup>C</strong></span>
          <span style={{marginTop:"40%"}}><strong>{day.day.uv}%</strong></span>
        </section>

        <section className='inner-week-card'>
          <span><strong>{day.day.maxwind_mph} m/s</strong></span>
          <span style={{marginTop:"40%"}}><strong>{day.day.avghumidity}%</strong></span>
        </section>
  
      </section>

        )}
        </>

  )
}

export default WeeklyInfoCard 