import axios from 'axios'
import {React , useEffect, useRef, useState,useContext  }from 'react'
import { useParams } from 'react-router-dom';
import { Bankcontext } from '../../../Context/Bankcontext';

function Updatebank() {
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
    axios.post(`http://localhost:4000/updatebankdeatils/${id}`,user)
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

        <div className=" textalign">
        <h1>Donate {p_name}</h1>


               </div>
         
         <form id='form' className='form_box' onSubmit={(e)=>submitfun(e)} >
            <div className='form_control ' >
                    <div className="row g-3">
            
                    <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Amount"  value={amount} name='amount' onChange={(e)=>setamount(e.target.value)} />
            </div>
           
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number"  value={mobile_number} name='p_nmobile_number' onChange={(e)=>setmobile_number(e.target.value)} />
            </div>
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder='Patient Name' value={p_name} name='p_name' onChange={(e)=>setp_name(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder='Account Number'  value={ac_number} name='ac_number' onChange={(e)=>setac_number(e.target.value)} />
            </div>
            
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="IFSC Code"  value={ifsc_code} name='isfc_code' onChange={(e)=>setifsc_code(e.target.value)}  />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Branch Name"   value={branch} name='branch' onChange={(e)=>setbranch(e.target.value)}/>
            </div>
            
            <div className="col-12" id='sum_btn'>
                <button type="submit" className="btn btn-primary">Donate Monthly</button>
            </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Updatebank