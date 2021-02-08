import React from 'react';
import { useHistory } from 'react-router-dom';
import './Boroughs.css'

function Boroughs ({ src, borough, description }) {
  const history = useHistory();

  return (
    <div className='card' onClick={() => history.push(`./search/${borough.toLowerCase()}`)}>
      <img src={src} alt="" />
      <div className='cardInfo'>
        <h2>{borough}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Boroughs;
