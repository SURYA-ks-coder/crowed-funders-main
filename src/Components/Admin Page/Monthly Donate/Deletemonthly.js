import axios from 'axios'
import { useEffect, useRef,React , useState, useContext }from 'react'
import { useParams } from 'react-router-dom'
import { Monthlycontext } from '../../../Context/Monthlycontext'



function Deletemonthly() {
    
     
     
    const { id }=useParams()
  

    
    const [type_of_money,settype_of_money]=useState('')
  const [amount,setamount]=useState('')
  const [full_name,setfull_name]=useState('')
  const [mobile_number,setmobile_number]=useState('')
  const [e_mail,sete_mail]=useState('')
  
  const {getdata,loading,setloding}=useContext(Monthlycontext)
  
      useEffect(()=>{
        const matchfun =async ()=>{
        try{
           
            let data=await getdata.filter((f)=>(f._id)===(id))
            
            console.log(data);
            if(data[0]){
            console.log('hi');
                settype_of_money(data[0].type_of_money)
                setamount(data[0].amount)
                setfull_name(data[0].full_name)
                setmobile_number(data[0].mobile_number)
                sete_mail(data[0].e_mail)
  
  
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
        const user = { type_of_money:type_of_money,amount:amount,full_name:full_name,mobile_number:mobile_number,e_mail:e_mail };
        axios.post(`http://localhost:4000/deletemonthly_donate/${id}`,user)
        .then(
            result=>{
              console.log('Save data success..!',result);
            //   window.location.href='/monthlyfinal'
            }
          )
          .catch(err=>{
            console.log('fails to save data...!',err);
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

export default Deletemonthly