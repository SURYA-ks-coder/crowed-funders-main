import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom'

import './Categories.css'
import Online_D from'./Online_D.jpg'
import Online from "./Online.jpg";
import slider_1 from "./slide 1.jpg";
import slider_2 from "./slide 2.jpg";
import slider_3 from './slide 3.jpg'
import slid1 from "./slide1.jpg";

function Categories() {
  






  const card=[{img:Online_D,Content:"Little Parmeshwari Can Win Over Blood Cancer With Your Help"},
              {img:Online,Content:"Your Support Will Help My Mother Krishna Tamang Beat Gall Bladder Cancer"},
              {img:slider_1,Content:"Paralyzed Has Caged Anjaneya Raju's Life!"},
              {img:slider_2,Content:"Help My Father Raise Funds For Post Medications"}]
              // {img:slider_3,Content:"To Save My Sister From The Clutches Of Cancer, I Need Your Help!"},
              // {img:slid1,Content:"My Friend Is In Danger. You Can Give Him A Kidney Transplant!"}



             
         

  const cardmap=   card.map((value)=>(
    <div className="col col-mar">
      <div className="card h-100">
        <img src={value.img} className="card-img-top" alt="fundraisers"/>
        <div className="card-body">
          <div className='title'>
          <a href="#" className='verified'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
              </svg> */}
              Verified</a>
              <p>By Sundhar</p>
              </div>
          <p className="card-title ">{value.Content}</p>
          
            
    
             
          <Link to='/login'><a href="#"  id='btn'>Donate </a></Link>
        </div>
      </div>
    </div>
    ))

   

      

  return (
    <div className='Top_Fundraisers'>

      <div className="container">
     
    
  
    <h1 className='text-center gap'>Top Fundraisers</h1>
    <div className="main-card">
    <div className="row row-cols-1 row-cols-md-6 g-4">
     {cardmap}

    </div>
    </div>
    </div>
   </div>








    
    
  )
}

export default Categories