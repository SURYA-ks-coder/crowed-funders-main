import React from 'react'
import img from '../image/map.png'
import './About.css'

function About() {
  return (
    <div className='container'>
      <h1 className='text-center m-5'>What Is Crowdfunding?</h1>
        <div className="row">
            <div className="col-sm-8 about">
        <p>Crowdfunding is the process of raising donations from people across the country to fund your chosen cause or treatment, within a short period of time. Unlike loans or insurance, crowdfunding requires no payback and is for everyone from a 5 month old baby to a senior citizen with critical illness.</p>
             </div>

             <div className="col-sm-4 ">
                 <img src={img} alt="" />
             </div>
            </div>
        
    </div>
  )
}

export default About