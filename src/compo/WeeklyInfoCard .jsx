import React from 'react'
import '../App.css'

function WeeklyInfoCard () {
  return (
    <section className='info-card'>
        <h3>Weekly Weather</h3>
        <WeekCard/>
    </section>
  )
}


function WeekCard() {
  return (
    <section className='week-card'>
      <section className='inner-week-card'>
      <span>Monday</span>
      <span>23<sup>o</sup>C</span>
      <span>1.94 m/s</span>
      </section>

    <section className='inner-week-card'>
    <span>few clouds</span>
      <span>21%</span>
      <span>48%</span>
    </section>
    </section>
  )
}

export default WeeklyInfoCard 