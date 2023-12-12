import { useState } from 'react'

import './App.css'
import WeeklyInfoCard from './compo/WeeklyInfoCard '
import CurrentInfoCard from './compo/CurrentInfoCard'
import SearchBar from './compo/SearchBar'

function App() {

  return (
    <div className='canvas' >
      <nav className='nav'><SearchBar/></nav>
      <div className="card-body" name="body">
      <CurrentInfoCard/><WeeklyInfoCard/>
      </div>
    </div>
  )
}

export default App
