import axios from 'axios'
import React, { useEffect, useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { Photocontext } from '../../../Context/Patientphotocontext'
import './Delete_photo.css'

function Get_patient_img() {
const {get_patient_photo,load,setlod}=useContext(Photocontext)



  
    
  return (
    <div className="container">
      
         
      { 
      get_patient_photo.length
      ?get_patient_photo.map((list)=>{
        return(
            <div className="row" id='section'>
               <div className="col-sm-3 "  >
              <img src={list.img} alt="" id='image_size'/> 
              </div>
              <div className="col-sm-2" >
                      <p >{list.p_name}</p>
              </div>
              <div className="col-sm-2" >
                      <p>{list.health_issue}</p>
              </div>

              <div className="col-sm-2" >      
                      <p>{list.hospital_name}</p>
              </div>

              <div className="col-sm-2" >      
                      <p >{list.city}</p>
              </div>

              <div className="col-sm-2" >
                      <p >{list.goal_amount}</p>
              </div>
            

              <div className="col-sm-2" >
              <Link to={`/updatepatient/${list._id}`}><button type='submit' className='btn'>Update</button></Link>

                
              </div>
              <div className="col-sm-2" >
                      <Link to={`/deletephoto/${list._id}`}><button type='submit' className='btn' >delete</button></Link>

                
              </div>
              
              <div className="col-sm-2" >
                      <Link to={`/createfundraiser_form/${list._id}`}>
                        <button type='submit' className='btn'>Create</button>
                        </Link>

                
              </div>
              

             
              
          </div>

        )}
        )
        :null
    
    }
</div>
    
  )
}

export default Get_patient_img
