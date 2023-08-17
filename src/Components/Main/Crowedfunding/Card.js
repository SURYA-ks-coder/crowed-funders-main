import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

import img2 from '../image/img2.jpg'
import img4 from '../image/img4.jpg'
import img6 from '../image/img6.jpg'
import img8 from '../image/img8.jpg'
import img9 from '../image/img9.jpg'
import './Crowedfunding.css'

function Card() {
const owl=[{img:img2,name:'Akil',id:1},
        {img:img4,name:'Ananth'},
        {img:img6,name:'selvin'},
        {img:img8,name:'kumar'},
        {img:img9,name:'Melvin'}]


const owlcatousel=owl.map((value,index)=>{
return(

 
  <div class="card owlimage" >
   <img src={value.img} alt="patient img" className="card-img-top "/>

  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/sucessstories'href="#" class="btn  " >Reade More</Link>
  </div>
</div>
 )
})
return (
    <div className="">
        {owlcatousel}
    </div>

)
}
export default Card