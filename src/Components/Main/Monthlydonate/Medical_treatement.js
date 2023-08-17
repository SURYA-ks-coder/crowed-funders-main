import React from 'react'
import Slider from "react-slick";


import img1 from '../image/kidney.png'
import img2 from '../image/cancer.png'
import img3 from '../image/bone.png'
import img4 from '../image/heart.png'
import img5 from '../image/covid.png'


function Medical_treatement() {
    
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



 
    
    const owl=[{img:img1,name:'Kidney Transplant',id:1},
              {img:img2,name:'Cancer Crowedfunding',id:2},
              {img:img3,name:'Bone Marrow Transplant',id:3},
              {img:img4,name:'Heart Transplant',id:4},
              {img:img5,name:'Covid-19 Support',id:5}]


    const owlcatousel=owl.map((a,index)=>{
      return(
      
       
        <div class="card owlimage" >
         <img src={a.img} alt="patient img" className="card-img-top "/>

        <div class="card-body">
          <h5 class="card-title">{a.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <Link to={`/sucessstories/${a.id}`}href="#" class="btn  " >Reade More</Link> */}
        </div>
      </div>
            
       
      )
    })
  return (
    <div className='container'>
        <h1 className='text-center'>Raise Fund For Any Medical Treatement On SKYUP </h1>
        <Slider {...settings}>
          
        
          {owlcatousel}
        
         
        </Slider>
    </div>
  )
}

export default Medical_treatement