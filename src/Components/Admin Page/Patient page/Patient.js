// import axios from 'axios'
// import React, { useEffect, useState,useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { Patientcontext } from '../../../Context/Patientcontext'
// import '../Registerpage/Register.css'

// function Patient() {
//     const [get_photo_data,setget_photo_data]=useState([])
// const {getdata,loading,setloding}=useContext(Patientcontext)


// //   const submitfun=()=>{
// //        axios.post('http://localhost:4000/photo_p_name') 
// //        .then(result=>{
// //          console.log('get patient data successful...',result);
// //            setget_photo_data(result.data.getdata)
// //        })
// //         .catch(err=>{
// //             console.log('error',err);
// //         })
// //     }
    
//   return (
//     <div className="container">
      
         
//       { 
//       getdata.length
//       ?getdata.map((list)=>{
//         return(
//             <div className="row" id='section'>
//                <div className="col-sm-1" >
//                       <p >{list.p_name}</p>
//               </div>
//               <div className="col-sm-1" >
//                       <p>{list.health_issue}</p>
//               </div>

//               <div className="col-sm-2" >      
//                       <p>{list.hospital_name}</p>
//               </div>

//               <div className="col-sm-2" >      
//                       <p >{list.city}</p>
//               </div>

//               <div className="col-sm-2" >
//                       <p >{list.goal_amount}</p>
//               </div>

//               <div className="col-sm-2" >
//               <Link to={`/updatepatient/${list._id}`}><button type='submit' className='btn'>Update</button></Link>

                
//               </div>
//               <div className="col-sm-1" >
//                       <Link to={`/deletepatient/${list._id}`}><button type='submit' className='btn'>delete</button></Link>

                
//               </div>
//               <div className="col-sm-2" >
//                       <Link to={`/createfundraiser/${list.health_issue}`}>
//                         <button type='submit' className='btn'>Create</button>
//                         </Link>

                
//               </div>
//           </div>

//         )}
//         )
//         :null
    
//     }
// </div>
    
//   )
// }

// export default Patient
