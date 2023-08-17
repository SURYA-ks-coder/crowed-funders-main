import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Bankcontext } from '../../../Context/Bankcontext'
import { Photocontext } from '../../../Context/Patientphotocontext'

import '../Registerpage/Register.css'


function Bank_deatils() {
  
    const {getdata,loading,setloding}=useContext(Bankcontext)
    const {get_patient_photo,load,setlod}=useContext(Photocontext)


    const [total_amount,settotal_amount]=useState([])


  useEffect(()=>{
    console.log(get_patient_photo);

     if(getdata.amount<=get_patient_photo.goal_amount){
     settotal_amount(getdata.amount)
}


    }, [])



    
  return (
    <div className="container">
      
         
      { 
      getdata.length
      ?getdata.map((list)=>{
       
        return(
            <div className="row" id='section'>
               <div className="col-sm-1" >
                      <p >{list.amount}</p>
              </div>
              <div className="col-sm-2" >
                      <p>{list.mobile_number}</p>
              </div>

              <div className="col-sm-2" >      
                      <p>{list.p_name}</p>
              </div>

              <div className="col-sm-1" >      
                      <p>{list.ac_number}</p>
              </div>

              <div className="col-sm-2" >
                      <p >{list.confirm_ac_number}</p>
              </div>
              <div className="col-sm-2" >
                      <p >{list.ifsc_code}</p>
              </div>
              <div className="col-sm-1" >
                      <p>{list.branch}</p>
              </div>
              <div className="col-sm-1" >
                      <p>{total_amount}</p>
              </div>
              
                <div className='row justify-content-center'>
              <div className="col-sm-2" >
              <Link to={`/updatebank/${list._id}`}><button type='submit' className='btn'>Update</button></Link>

                
              </div>
              <div className="col-sm-1" >
                      <Link to={`/deletebank/${list._id}`}><button type='submit' className='btn'>delete</button></Link>

                      
              </div>
              </div>
          </div>

        )}
        )
        :null
    
    }
</div>
    
  )
}



export default Bank_deatils