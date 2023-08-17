import React from 'react'
import { Link } from 'react-router-dom'
import img from './logo.png'

import './Navbar.css'

function Navbar(){

    return(
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container">
    
      
   <Link to='/'>  <img src={img} alt="Logo" id='image'  /></Link>

      

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="  navbar-nav ">
      <li className="nav-item">
          <Link to='/home' ><a className="nav-link " href="#" id='navebtn' aria-disabled="true">Home</a></Link>
        </li> 
      <li className="nav-item">
          <Link to='/StartaFundraiser' ><a className="nav-link " href="#" id='navebtn' aria-disabled="true">Start a Fundraiser</a></Link>
        </li> 
        {/* <li className="nav-item">
          <Link to='/nextform' ><a className="nav-link " href="#" id='navebtn' aria-disabled="true">patient Deatils</a></Link>
        </li>  */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fundraise for
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Medical</a></li>
            <li><a className="dropdown-item" href="#">NGO/Charity</a></li>
            
            <li><a className="dropdown-item" href="#">Other case</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link to='/monthly2' className="nav-link " href="#" tabindex="-1" id='navebtn' aria-disabled="true">Monthly Donate</Link>
        </li>
        
        <li className="nav-item">
          <Link to='/about' className="nav-link " href="#" tabindex="-1" id='navebtn' aria-disabled="true">About</Link>
        </li>
        {/* <li className="nav-item">
          <Link to='/admin' className="nav-link " href="#" tabindex="-1" id='navebtn' aria-disabled="true">Admin</Link>
        </li> */}
        <li className="nav-item">
         <Link to='/startafundraiser'> <a className="nav-link " href="#" tabindex="-1" id='navebtn' aria-disabled="true">Sign in</a></Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link " href="#" tabindex="-1" id='navebtn' aria-disabled="true">Login</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar