import { Link } from 'react-router-dom'
import React, { useContext,useEffect, useState  } from 'react'
import './Brosefundraiser.css'
import Givemonthly from './Givemonthly'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Bankcontext } from '../../../Context/Bankcontext';
import { Create_patientcontext } from '../../../Context/Create_patientcontext'
import Total_component from './Total_component'

function Brosefundraiser() {

    

// const {get_patient_data,loading,setloding}=useContext(Create_patientcontext)

const [get_patient_data,setget_patient_data]=useState([])


 useEffect(()=>{
  
         axios.get('http://localhost:4000/create_get_fundraiser') 
         .then(result=>{
           console.log('get_create_patient data successful...',result);
           setget_patient_data(result.data.getdata)
          
         
         })
          .catch(err=>{
              console.log('error',err);
          })

           
          
  
      
          
          
          
      }, [])
     
  return (
    <div className='brose_fundraiser'>
  <div className="carousel">
      {/* <img src={img2} className="browse_set w-100" alt="..."/> */}
    </div>
      <Givemonthly/>
        <div className='Top_Fundraisers'>
        <div className="container">
            <h1 className='text-center gap'>Browse Fundraisers</h1>
            <div className="main-card">
            <div className="row row-cols-1 row-cols-md-6 g-4">
            {
            get_patient_data.map((value)=>(
             
              <div className="col col-mar">
                <div className="card h-100">
                  <img src={value.img} className="card-img-top" alt="fundraisers"/>
                  <div className="card-body">
                    <div className='title'>
                    <a href="#">Verified</a>
                        <p className='name'>Patient Name: {value.p_name}</p>
                        </div>
                        <div className="row">
                        <div className='col-sm-12 text-color'>
                          Goal amount : {value.amount}
                        </div>
                        <div className="col-sm-12  text-color">
                        <Total_component p_id={value._id}/>

                        </div>
                        </div>
                    <p className="card-title ">{value.content}</p>
                    <Link to={`/bankdeatils/${value._id}`}><a href="#"  id='btn'>Donate </a></Link>
                  </div>
                </div>
              </div>
              ))

}
     

            </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Brosefundraiser