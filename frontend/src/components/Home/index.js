import React from 'react'
import './Home.css'

import Boroughs from '../Boroughs'

function Home() {
  return (
    <div className='homeWrapper'>
      <h2>Browse By Borough</h2>
      <div className='boroughSection'>
        <Boroughs src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/220px-Above_Gotham.jpg' borough='Manhattan' description="Explore Manhattan"/>
        <Boroughs src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Greenpoint_Houses.JPG/220px-Greenpoint_Houses.JPG' borough='Brooklyn' description='Explore Brooklyn'/>
        <Boroughs src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Unisphere_in_summer.jpg/220px-Unisphere_in_summer.jpg' borough='Queens' description='Explore Queens'/>
        <Boroughs src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Melrosebx1.JPG/220px-Melrosebx1.JPG' borough='The Bronx' description='Explore The Bronx'/>
        <Boroughs src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Staten_Island_Borough_Hall_sign.jpg/220px-Staten_Island_Borough_Hall_sign.jpg' borough='Staten Island' description='Explore Staten Island'/>
      </div>
    </div>
  )
}

export default Home
