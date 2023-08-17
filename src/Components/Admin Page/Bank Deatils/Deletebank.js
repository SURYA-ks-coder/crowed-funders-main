import axios from 'axios'
import {React , useEffect, useRef, useState,useContext  }from 'react'
import { useParams } from 'react-router-dom';
import { Bankcontext } from '../../../Context/Bankcontext';

function Deletebank() {
    const { id }=useParams()
    

const[amount,setamount]=useState('')
const[mobile_number,setmobile_number]=useState('')
const[p_name,setp_name]=useState('')
const[ac_number,setac_number]=useState('')
const[ifsc_code,setifsc_code]=useState('')
const[branch,setbranch]=useState('')
const {getdata,loading,setloding}=useContext(Bankcontext)


console.log('get dasta',getdata);
useEffect(()=>{
    const matchfun =async ()=>{
    try{
       
        let data=await getdata.filter((f)=>(f._id)===(id))
        
        console.log(data);
        if(data[0]){
        console.log('hi');
            setamount(data[0].amount)
            setmobile_number(data[0].mobile_number)
            setp_name(data[0].p_name)
            setac_number(data[0].ac_number)
            setifsc_code(data[0].ifsc_code)
            setbranch(data[0].branch)



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
    const user={amount:amount,mobile_number:mobile_number, p_name:p_name,  ac_number:ac_number,ifsc_code:ifsc_code, branch:branch}
    axios.post(`http://localhost:4000/deletebankdeatils/${id}`,user)
    .then(
        result=>{
          console.log('Save data success..!',result);
          
        }
      )
      .catch(err=>{
        console.log('fails to save data...!',err);
      })
    
}
    
  return (
    <div className='container'>
<form onSubmit={(e)=>submitfun(e)}>
    <h1>Confirm Delete the {ac_number} Data.!</h1>
<button type='submit' className='btn'  >Delete</button>
</form>
    </div>
  )
}

export default Deletebank