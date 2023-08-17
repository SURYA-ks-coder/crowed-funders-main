import axios from 'axios'
import {React , useEffect, useRef, useState }from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Patientcontext } from '../../../Context/Patientcontext';

function Fondraiser_form_create() {

    const { id }=useParams()
  

const [photo,setphoto]=useState({})
const [p_name,setp_name]=useState('')
const [content,setcontent]=useState('')
// const [img_path,setimg_path]=useState('')
const[amount,setamount]=useState('')



const {getdata,loading,setloding}=useContext(Patientcontext)

    useEffect(()=>{
      const matchfun =async ()=>{
      try{
         
          let data=await getdata.filter((f)=>(f._id)===(id))
          
          console.log(data);
          if(data[0]){
          console.log('hi');
              setp_name(data[0].p_name)
              setphoto(data[0].img)
              setamount(data[0].goal_amount)
             


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
    

    const user ={img:photo, p_name:p_name ,amount:amount,content:content}
    axios.post(`http://localhost:4000/create_fundraiser`,user )
    

    .then(
      result=>{
        console.log('Save data success..react!',result);
        window.location.href='/admin';
        

      }
    )
    .catch(err=>{
      console.log('fails to save data.. !',err);
    })



  }
  
  return (

    <div className="container">
        <form onSubmit={(e)=>submitfun(e)} >
        <div className="row mb-2" > 
    <label for="inputEmail3" className="col-sm-4 col-form-label">Patient Documents</label>
    <div class="col-sm-8">
  
              <img src={photo} alt="" id='image_size'/> 
        
    </div>
  </div>
  <div className="row mb-2" >
    <label for="inputEmail3" className="col-sm-4 col-form-label next"></label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="Patient full Name"  value={photo} name='p_name' onChange={(e)=>setphoto(e.target.value)} required/>

    </div>
  </div>

        <div className="row mb-2" >
    <label for="inputEmail3" className="col-sm-4 col-form-label next">Patient full Name</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="Patient full Name"  value={p_name} name='p_name' onChange={(e)=>setp_name(e.target.value)} required/>

    </div>
  </div>
  <div className="row mb-2" >
    <label for="inputEmail3" className="col-sm-4 col-form-label next">Goal Amount</label>
    <div class="col-sm-8">
    <input type="text" className="form-control " id="" placeholder="Goal Amount"  value={amount} name='amount' onChange={(e)=>setamount(e.target.value)} required/>

    </div>
  </div>
        <div class=" row mb-2">
  <label for="exampleFormControlTextarea1" className="col-sm-4 col-form-label next">Content</label>
  <div class="col-sm-8">
  <textarea class="form-control" id="exampleFormControlTextarea1" value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
</div>
</div>
<div className="row">
    <button type='submit' className='btn flex-center'>Submit</button>
</div>
        </form>
    </div>
  )
}

export default Fondraiser_form_create