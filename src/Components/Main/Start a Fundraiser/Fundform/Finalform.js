import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Finalform() {
const [photo,setphoto]=useState({})
const [p_name,setp_name]=useState('')
const [health_issue,sethealth_issue]=useState('')
const [hospital_name,sethospital_name]=useState('')
const [city,setcity]=useState('')
const [goal_amount,setgoal_amount]=useState('')



  const uplodfun=(e)=>{
    e.preventDefault();
     console.log("photo",photo);
    const patient_deatils=new FormData()
    patient_deatils.append('photo',photo)   
    patient_deatils.append('p_name',p_name)
    patient_deatils.append('health_issue',health_issue)
    patient_deatils.append('hospital_name',hospital_name)
    patient_deatils.append('city',city)
    patient_deatils.append('goal_amount',goal_amount)


    console.log('patient_img',patient_deatils);

    axios.post('http://localhost:4000/addphoto',patient_deatils)
   .then(
      result=>{
          console.log('save photo success..!',result);
          alert('Patients Documents Uploaded Sucessfully..!')
          window.location.href='/'

      })
  .catch(err=>{
      console.log('fails to save...!',err);
  })
  
  }
  return (
    <div className='container'>
        <div className='formcontrol'>
        <h1 className='next_2'>Patient's Photos</h1>
<form onSubmit={(e)=>uplodfun(e)} encType='multipart/form-data'>
  
            <div className="row mb-4" >
    <label for="inputEmail3" className="col-sm-4 col-form-label next">Patient full Name</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="Patient full Name"   name='p_name' value={p_name} onChange={(e)=>setp_name(e.target.value)} required/>

    </div>
  </div>
  <div className="row mb-4" >
    <label for="inputPassword3" className="col-sm-4 col-form-label next">What is the health issue?</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="What is the health issue?"  name='health_issue' value={health_issue} onChange={(e)=>sethealth_issue(e.target.value)} required/>


    </div>
  </div>
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">Which hospital?</label>
    <div class="col-sm-8">
    <input type="text" className="form-control  " id="" placeholder="Which hospital?" name='hospital_name' value={hospital_name} onChange={(e)=>sethospital_name(e.target.value)} required/>


    </div>
  </div>
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">City</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="City" name='city' value={city} onChange={(e)=>setcity(e.target.value)} required/>

    </div>
  </div>
  
  <div className="row mb-4">
    <label for="inputPassword3" className="col-sm-4 col-form-label next">Goal Amount</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="goal_amount" name='goal_amount' value={goal_amount} onChange={(e)=>setgoal_amount(e.target.value)} required/>

    </div>
  </div>


  <div className="row mb-3" > 
    <label for="inputEmail3" className="col-sm-4 col-form-label">Patient Documents</label>
    <div class="col-sm-8">
    <input type="file" className="form-control next" id=""  name='photo' placeholder="Choose Files"  onChange={(e)=>setphoto(e.target.files[0])}/>

    </div>
  </div>
  <div className="btn_align">
      <button type="submit" className="btn ">submit</button>
 </div>

    </form>
    {/* <div>
     <img src={photo} alt="" /> 
    </div> */}
    </div>
    </div>
  )
}

export default Finalform