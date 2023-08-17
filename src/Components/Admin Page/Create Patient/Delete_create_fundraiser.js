import axios from 'axios'
import { useEffect, useRef,React , useState, useContext }from 'react'
import { useParams } from 'react-router-dom'
import { Create_patientcontext } from '../../../Context/Create_patientcontext'

function Delete_create_fundraiser() {
     
    const { id }=useParams()
  

    
    const [p_name,setp_name]=useState('')
  const [amount,setamount]=useState('')
  const [content,setcontent]=useState('')
  
  const {getdata,loading,setloding}=useContext(Create_patientcontext)
  
      useEffect(()=>{
        const matchfun =async ()=>{
        try{
           
            let data=await getdata.filter((f)=>(f._id)===(id))
            
            console.log(data);
            if(data[0]){
            console.log('hi');
                setp_name(data[0].p_name)
                setamount(data[0].amount)
                setcontent(data[0].content)
               
  
  
        }
    }
          catch(err){
            console.log(err);
          }
            return 
          }
      matchfun()
     },[])
      
      
    const submitfun= (event)=>{

        event.preventDefault();
        const user = { p_name:p_name,amount:amount,content:content };
        axios.post(`http://localhost:4000/delete_create_fundraiser/${id}`,user)
        .then(
            result=>{
              console.log('Save data success..!',result);
              window.location.href='/admin'
            }
          )
          .catch(err=>{
            console.log('fails to save data...!',err);
          })
      
    }
  return (
    <div className='container'>
<form onSubmit={(e)=>submitfun(e)}>
    <h1>Confirm Delete the {p_name} Data.!</h1>
<button type='submit' className='btn'  >Delete</button>
</form>
    </div>
  )
}



export default Delete_create_fundraiser