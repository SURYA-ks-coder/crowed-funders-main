import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Medical_treatement from './Medical_treatement'
import Monthlyform from './Monthlyform/Monthlyform'
import './Monthly_2_page.css'
import Why_choose from './Why_choose'
import ScrollToTop from '../ScrollToTop';

function Monthly_2_page() {
  return (
    <Router>
      <ScrollToTop/>

    <div className='monthly_img '>
        <div className="row">
          <div className="col-sm-8">
          <h3 className='heading '> Amith Raised 72 lakh <br /> for hid Blood Cancer Tratement</h3>

          </div>
          <div className="col-sm-4 ">
        <h1 className=' arange'>Need Urgent Funds <br /> For You Medical Treatement?</h1>
        <p className='line_color'>Raise Money Online To Pay Hospital & Medical Bills.</p>
        </div>
        </div>
        
    </div>
    <Monthlyform/>
      <Medical_treatement/>
      <Why_choose/>
    
    </Router> 
   
  )
}

export default Monthly_2_page