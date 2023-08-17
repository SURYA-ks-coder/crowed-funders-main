import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import  {React, useState } from 'react'
import { useParams } from 'react-router-dom';
import  { Fundraisercontext } from '../../../Context/Fundraisercontext';

function Deleteregister() {
    const [full_name,setfullname]=useState('');
    const [e_mail,setemail]=useState('');
    const [mobile_number,setmobilenumber]=useState('');
    // const [password,setpassword]=useState('');
    const {id} = useParams()
    const {getdata,loading,setloding}=useContext(Fundraisercontext)
      console.log(getdata);
useEffect(()=>{
      const matchfun =async ()=>{
        try{
           
            let data=await getdata.filter((index)=>(index._id)===(id))
            console.log(data);
            if(data[0]){
            console.log('hi');
                setfullname(data[0].full_name)
                setemail(data[0].e_mail)
                setmobilenumber(data[0].mobile_number)

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
            event.preventDefault()
            // const data={full_name:full_name,e_mail:e_mail,mobile_number:mobile_number}
            // console.log('submit data',data);
            
           
    
            axios.post(`http://localhost:4000/deletefundraiser/${id.toString()}`,getdata)
            .then(result=>{
                console.log('post register data successful...',result);
                setfullname('')
                setemail('')
                setmobilenumber('')
               
    
              })
               .catch(err=>{
                   console.log('error',err);                     
               })
    
               
        }
  return (
    <div className='container'>
<form onSubmit={(e)=>submitfun(e)}>
    <h1>Confirm Delete the {full_name} Data.!</h1>
<button type='submit' className='btn'  >Delete</button>
</form>
    </div>
  )
}

export default Deleteregister