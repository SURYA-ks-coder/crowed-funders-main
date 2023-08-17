import axios from 'axios'
import {React , useEffect, useRef, useState }from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { Patientcontext } from '../../../Context/Patientcontext';

// import './FundForm.css'
// import'./Nextform.css'


function Updatepatient() {

    const { id }=useParams()
  

  
  const [p_name,setp_name]=useState('')
const [health_issue,sethealth_issue]=useState('')
const [hospital_name,sethospital_name]=useState('')
const [city,setcity]=useState('')
const [goal_amount,setgoal_amount]=useState('')

const {getdata,loading,setloding}=useContext(Patientcontext)

    useEffect(()=>{
      const matchfun =async ()=>{
      try{
         
          let data=await getdata.filter((f)=>(f._id)===(id))
          
          console.log(data);
          if(data[0]){
          console.log('hi');
              setp_name(data[0].p_name)
              sethealth_issue(data[0].health_issue)
              sethospital_name(data[0].hospital_name)
              setcity(data[0].city)
              setgoal_amount(data[0].goal_amount)


      }
  }
        catch(err){
          console.log(err);
        }
          return 
        }
    matchfun()
   },[])

   



  const submitfun=(event)=>{
    event.preventDefault();
    

    const user ={ p_name:p_name, health_issue:health_issue, hospital_name:hospital_name, city:city,goal_amount:goal_amount }
    axios.post(`http://localhost:4000/updatephoto/${id}`,user )
    

    .then(
      result=>{
        console.log('Save data success..react!',result);
        // window.location.href='/get_patient';

      }
    )
    .catch(err=>{
      console.log('fails to save data.. !',err);
    })



  }
  
  
    
 
  return (
    <div className='container'>
        <div className='formcontrol'>
        <h1 className='next_2'>Beneficiary information</h1>
<form onSubmit={(e)=>submitfun(e)}>
  <div className="row mb-4" >
    <label for="inputEmail3" className="col-sm-4 col-form-label next">Patient full Name</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="Patient full Name"  value={p_name} name='p_name' onChange={(e)=>setp_name(e.target.value)} required/>

    </div>
  </div>
  <div className="row mb-4" >
    <label for="inputPassword3" className="col-sm-4 col-form-label next">What is the health issue?</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="What is the health issue?" value={health_issue} name='health_issue' onChange={(e)=>sethealth_issue(e.target.value)} required/>


    </div>
  </div>
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">Which hospital?</label>
    <div class="col-sm-8">
    <input type="text" className="form-control  " id="" placeholder="Which hospital?" value={hospital_name} name='hospital_name' onChange={(e)=>sethospital_name(e.target.value)} required/>


    </div>
  </div>
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">City</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="City" value={city} name='city' onChange={(e)=>setcity(e.target.value)} required/>

    </div>
  </div>
  
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">Goal Amount</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="goal_amount" value={goal_amount} name='goal_amount' onChange={(e)=>setgoal_amount(e.target.value)} required/>

    </div>
  </div>
  
 

  
 
 
 <div className="btn_align">
      <button type="submit" className="btn ">Submit</button>

 </div>
     
</form>
    </div>
    </div>
  )
}

export default Updatepatient


