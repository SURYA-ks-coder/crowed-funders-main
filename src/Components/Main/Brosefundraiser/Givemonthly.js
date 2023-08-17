import React from 'react'
import { Link } from 'react-router-dom'
import './Brosefundraiser.css'

function Givemonthly() {
  return (
    <div className='container position_change'>
        <div class="card text-center bg_img">
 
  <div class="card-body ">
    <h3 class="card-title">Save Patient Every Month</h3>
    <p id='p' class="card-text">Start your GEM Subscription join thousands of monthly donors in helping patients afford critical treatment.</p>
  </div>
  <div id='center'>
  <Link to='/monthly2' href="#" class="btn" >Give Every Month</Link>
  </div>
  
</div>
    </div>
  )
}

export default Givemonthly