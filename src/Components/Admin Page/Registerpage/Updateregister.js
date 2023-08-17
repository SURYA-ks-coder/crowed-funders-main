import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import  {React, useState } from 'react'
import { useParams } from 'react-router-dom';
import  { Fundraisercontext } from '../../../Context/Fundraisercontext';




function Updateregister() {
    // const [fundraise_for,setfundraisefor]=useState('');
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
        const data={full_name:full_name,e_mail:e_mail,mobile_number:mobile_number}
        console.log('submit data',data);
        
       

        axios.post(`http://localhost:4000/updatefundraiser/${id.toString()}`,data)
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
    <div className="container">  
    <div className='formcontrol'>
        <h1>Start a Fundraiser</h1>
        <form onSubmit={(e)=>submitfun(e)}>
                <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Full Name" name='fullname' value={full_name} onChange={(e)=>setfullname(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Email" name='email' value={e_mail} onChange={(e)=>setemail(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number" name='mobilenumber' value={mobile_number} onChange={(e)=>setmobilenumber(e.target.value)} required/>
            </div>
           
                <div id='btn'>
              
            <button type="submit"  id='buttonshadow'  >Update</button>

                </div>

        </form>

    </div>
    </div>

  )
}

export default Updateregister