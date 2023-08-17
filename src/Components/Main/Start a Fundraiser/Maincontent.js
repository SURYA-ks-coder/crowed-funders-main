import React from 'react'
import { Link } from 'react-router-dom'

import './Maincontent.css'
function Maincontent() {
  return (
    
      <div className='maincontent w-100'>
        <div className='container ' >
          <div id='align'>
              <h1>Need fund to pay for a medical <br />
              Emergency or social Causes?</h1>
              <p>SKYup 0%Platform free ensures maximum fund for you</p>
             <Link to='/StartaFundraiser'> <button className="btn" href="#"  aria-disabled="true">Start a Fundraiser</button></Link>
          </div>
          </div>
          </div>
        )
    

   
}

export default Maincontent