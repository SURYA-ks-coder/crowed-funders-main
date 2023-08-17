import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

import img2 from '../image/img2.jpg'
import img4 from '../image/img4.jpg'
import img6 from '../image/img6.jpg'
import img8 from '../image/img8.jpg'
import img9 from '../image/img9.jpg'
import './Crowedfunding.css'


function Crowedfunding() {

  var settings = {


    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



 
    
    const owl=[{img:img2,name:'Akil',id:1},
              {img:img4,name:'Ananth',id:2},
              {img:img6,name:'selvin',id:3},
              {img:img8,name:'kumar',id:4},
              {img:img9,name:'Melvin',id:5}]


    const owlcatousel=owl.map((a,index)=>{
      return(
      
       
        <div class="card owlimage h-100" >
         <img src={a.img} alt="patient img" className="card-img-top "/>

        <div class="card-body">
          <h5 class="card-title">{a.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/sucessstories/${a.id}`}href="#" class="btn  " >Reade More</Link>
        </div>
      </div>
            
       
      )
    })
    return (
      <div className="container">
        <div>
        <h2 className="text-center">Success Stories</h2>
        <Slider {...settings}>
          
        
          {owlcatousel}
        
         
        </Slider>
        
        </div>
      </div>
    )}
  


export default Crowedfunding