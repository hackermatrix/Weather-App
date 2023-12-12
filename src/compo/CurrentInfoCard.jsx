import React from 'react'
import '../App.css'

function CurrentInfoCard() {
  return (
    <div className='info-card'>
        <section className='inner-current-card'>
        <h3>Current Weather</h3>
        <section style={{display:"flex",justifyContent:'space-around'}}>

          <span style={{display:'flex',flexDirection:"column"}}>
            <span>Ahmednagar</span>
            <span>Today 12 Dec</span>
          </span>

          <span style={{display:'flex',flexDirection:"column"}}>
            <span>25<sup>o</sup>c</span>
            <span>few clouds</span>
          </span>

          <span>
            IMAGE PLACEHOLDER
          </span>
        </section>
        </section>

        <section className='inner-current-card'>
        <h3>Air Conditions</h3>
        <section style={{display:"flex",justifyContent:'space-around'}}>
        <span className='air-condition-card'>
            <span>Real Feel</span>
            <span>25<sup>o</sup>c</span>
        </span>

        <span className='air-condition-card'>
            <span>Wind</span>
            <span>3.23 m/s</span>
        </span>

        <span className='air-condition-card'>
            <span>Clouds</span>
            <span>13 %</span>
        </span>

        <span className='air-condition-card'>
            <span>Humidity</span>
            <span>45 %</span>
        </span>
        </section>
        </section>

        <section className='inner-current-card'>
        <h3>Today's Forecast</h3>
        <section style={{display:'flex',justifyContent:"center"}}>
          <span className='today-forecast-card'>
            <span>09:00</span>
            <span>IMG </span>
            <span>25<sup>o</sup>c</span>
          </span>
        </section>
        </section>
    </div>
  )
}

export default CurrentInfoCard