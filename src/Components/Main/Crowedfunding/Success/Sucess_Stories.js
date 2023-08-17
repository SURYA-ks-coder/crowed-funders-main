import React from 'react'
import { Link } from 'react-router-dom'
import img2 from './image/img2.jpg'
import img4 from './image/img4.jpg'
import img6 from './image/img6.jpg'
import img8 from './image/img8.jpg'
import img9 from './image/img9.jpg'
import './Success_Stories.css'

function Sucess_Stories() {
    const success=[{img:img2,name:'Akil',days:'3 days ago',id:1},
              {img:img4,name:'Ananth',days:'7 days ago',id:2},
              {img:img6,name:'selvin',days:'8 days ago',id:3},
              {img:img8,name:'kumar',days:'5 days ago',id:4},
              {img:img9,name:'Melvin',days:'1 days ago',id:5}]


    
        const successmap=success.map((value)=>{
            return(

            <Link to={`/sucessstories/${value.id}`} href="#" class="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
    <div className="row" id='row_id'>
    <div className="col-sm-4" id='card_align'>
     <img src={value.img} className="rounded col-12" alt="..." id='card_img'/>

    </div>
    <div className="col-sm-8">
    <h5 className="mb-1">{value.name}</h5>
      <small class="text-muted">{value.days}</small>
    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, neque dolorum. Beatae est minima iusto nisi sequi nam .</p>

    </div>
    
    </div>
  </div>
  </Link>
  
           
         ) })
  return (
    
    <div class="list-group" id='position'>
     

        {successmap}

      

</div>
    
  )
}

export default Sucess_Stories