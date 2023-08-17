import React from 'react'
import { Link } from 'react-router-dom'
import img from './Surya_p.png'

import './Navbar_admin.css'

function Nav(){
  const logoutfun=(e)=>{
    e.preventDefault();
    localStorage.clear();
    window.location.href='/home'
  }

    return(
        <div className='Navbar Nav_color'>
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container">
    
   {/* <Link to=''>  <img src={img} alt="Logo" id='image'  /></Link> */}
   <div className='company_name'>
      <h1>SKY UP <p>Crowed Funding pvt.Ltd</p></h1>
      <p>Marthandam,kanyakumari Dist.</p>
      <p>Pin-04651</p>
      </div>

      

  <form onSubmit={logoutfun}>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <img src={img} className='adminimg' alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Admin Logout</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                      <button type="submit" className="btn btn-primary" >Log Out</button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    </form>

  </div>
</nav>
        </div>

    )
}

export default Nav