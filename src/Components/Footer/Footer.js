import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
    
        <div className="container" id='space'>
            <div className=" row headersec">
            <ul className='col part'>
                <li>
                <Link to='/home' className="headsec"  href="#">Home</Link>
                </li>
                <li>
                <Link to='/startafundraiser' className="headsec" href="#">Start a fundraiser</Link>
                </li>
                <li>
                <a className="headsec" href="#">Browse fundraisers</a>
                </li>
                <li>
                <a className="headsec" href="#">About</a>
                </li>
                <li>
                <Link to='/startafundraiser' className="headsec" href="#">Sign in</Link>
                </li>
                <li>
                <Link to='/login' className="headsec" href="#">Login</Link>
                </li>
            </ul>
            
            
                
            <ul className="col part">
                <li>
                    <a href=""><h5>LEARN</h5></a>
                </li>
                <li>
                    <a href="">How Crowdfunding Works</a>
                </li>
                <li>
                    <a href="">Fundraising Ideas</a>
                </li>
                {/* <li>
                    <a href="">Fundraising Tips</a>
                </li> */}
                <li>
                    <a href="">Success Stories</a>
                </li>
                {/* <li>
                    <a href="">Frequently Asked Questions</a>
                </li> */}
                <li>
                    <a href="">Pricing & Fees</a>
                </li>
                <li>
                    <a href="">Trust & Safety</a>
                </li>
                <li>
                    <a href="">Crowdfunding in India</a>
                </li>
            </ul>
        
        
                
            <ul className="col part">
                <li>
                    <a href=""><h5>TOP CATEGORIES</h5></a>
                </li>
                <li>
                    <a href="">Medical Crowdfunding</a>
                </li>
                <li>
                    <a href="">Transplant Crowdfunding</a>
                </li>
                {/* <li>
                    <a href="">Cancer Crowdfunding</a>
                </li>
                <li>
                    <a href="">Child Health Crowdfunding</a>
                </li>
                <li>
                    <a href="">NGO Crowdfunding</a>
                </li>
                <li>
                    <a href="">Education Crowdfunding</a>
                </li>
                <li>
                    <a href="">Emergency Crowdfunding</a>
                </li>
                <li>
                    <a href="">Film Crowdfunding</a>
                </li> */}
            </ul>
      
    
            <ul className="col part">
                <li>
                    <a href="">Linkedin</a>
                </li>
                <li>
                    <a href="">You Tube</a>
                </li>
                <li>
                    <a href="">FaceBook</a>
                </li>
                <li>
                    <a href="">Twitter</a>
                </li>
                <li>
                    <a href="">intagram</a> 
                </li>
            </ul>
        
            </div>
            </div>
        

        <h6 className='copyright'>Copy right@ 2022</h6>
    </div>
  )
}

export default Footer

