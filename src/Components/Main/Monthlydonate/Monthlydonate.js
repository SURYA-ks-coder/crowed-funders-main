import React from 'react'
import { Link } from 'react-router-dom'

import M_donate from './Online.jpg'
import './Monthlydonate.css';

function Monthlydonate() {
  return (
    <div className='background'>
    <div className='container'>
        <div className="row">
        <div className='col col-md'>
            <img src={M_donate} class="img-thumbnail" alt="Monthly donate" />
        </div>
        <div className='col col-md' id='monthly_donate_clum'>
            <h1>Monthly Donate</h1>
            <p>To save countless lives give every month is a monthly donate subscription that helps patients in india afford life saving treatement on time.</p>
           <Link to='/monthly2'> <button className='btn'>Give Every Month</button></Link>
           <p className='transpency'>100% transparency</p>
          
        </div>
        </div>
        </div>
    </div>
  )
}

export default Monthlydonate