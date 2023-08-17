// import axios from 'axios'
// import {React , useEffect, useRef, useState }from 'react'
// import { useParams } from 'react-router-dom';
// import { useContext } from 'react';

// import { Patientcontext } from '../../../Context/Patientcontext';




// function Deletepatient() {

//     const { id }=useParams()
  

  
//   const [p_name,setp_name]=useState('')
// const [health_issue,sethealth_issue]=useState('')
// const [hospital_name,sethospital_name]=useState('')
// const [city,setcity]=useState('')
// const [goal_amount,setgoal_amount]=useState('')

// const {getdata,loading,setloding}=useContext(Patientcontext)

//     useEffect(()=>{
//       const matchfun =async ()=>{
//       try{
         
//           let data=await getdata.filter((f)=>(f._id)===(id))
          
//           console.log(data);
//           if(data[0]){
//           console.log('hi');
//               setp_name(data[0].p_name)
//               sethealth_issue(data[0].health_issue)
//               sethospital_name(data[0].hospital_name)
//               setcity(data[0].city)
//               setgoal_amount(data[0].goal_amount)


//       }
//   }
//         catch(err){
//           console.log(err);
//         }
//           return 
//         }
//     matchfun()
//    },[])

   



//   const submitfun=(event)=>{
//     event.preventDefault();
    

//     const user ={ p_name:p_name, health_issue:health_issue, hospital_name:hospital_name, city:city,goal_amount:goal_amount }
//     axios.post(`http://localhost:4000/deletepatient/${id}`,user )
    

//     .then(
//       result=>{
//         console.log('Save data success..react!',result);
//         window.location.href='/admin';

//       }
//     )
//     .catch(err=>{
//       console.log('fails to save data.. !',err);
//     })



//   }

//   return(
//     <div className='container'>
//     <form onSubmit={(e)=>submitfun(e)}>
//         <h1>Confirm Delete the {p_name} Data.!</h1>
//     <button type='submit' className='btn'  >Delete</button>
//     </form>
//         </div>
//   )
// }
// export default Deletepatient
  