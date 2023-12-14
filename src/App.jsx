import { useState } from 'react'

import './App.css'
import WeeklyInfoCard from './compo/WeeklyInfoCard '
import CurrentInfoCard from './compo/CurrentInfoCard'

function App() {

  const [query,setQuery] = useState("");
  const [submit,setSubmit] = useState(false);
  

  return (
    <div className='canvas' >
      <nav className='nav'>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input type='text' placeholder='Search City' onChange={(e)=>{
          setSubmit(false);
          setQuery(e.target.value)
        }}    style={{width:'30vw',height:'1.5vw'}}>
        </input> 

         <button onClick={()=>{
          console.log(query)
          setSubmit(true);
          }} style={{border:'1px solid',margin:'1vw'}}>Find</button>
          
    </div>
    </nav>

    {submit?<div className="card-body" name="body"><CurrentInfoCard query={query}/><WeeklyInfoCard query={query}/></div>:<h2>Enter Location</h2>}
      
    </div>
  )
}

export default App
