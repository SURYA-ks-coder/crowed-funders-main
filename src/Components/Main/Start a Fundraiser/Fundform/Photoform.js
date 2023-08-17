// import {React , useEffect, useRef, useState }from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'


// function Photoform() {
//     const [patientdata, setpatient] = useState({
//         p_name:'',
//         health_issue:'',
//         hospital_name:'',
//         city:'',
//         goal_amount:'',
        
//         photo:''
      
//       })
     
    
    
    
//       const inputref= useRef(null)
//       useEffect(() => {
//         inputref.current.focus()
    
//       },[])
    
    
    
//       const inputfun=name=>(event)=>{
//         setpatient({...patientdata,[name]:event.target.value})
//       }

//       const inputphoto=(e)=>{
//         setpatient({...patientdata, ['photo'] : e.target.files[0]})}
    
    
//       const submitfun=(event)=>{
        
        
//         event.preventDefault();
//         const { p_name, health_issue, hospital_name, city,goal_amount,photo } = patientdata;
//         const user ={ p_name, health_issue, hospital_name, city,goal_amount,photo }
//         console.log(patientdata);
//         axios.post('http://localhost:4000/add_photo_form',user )
        
    
//         .then(
//           result=>{
//             console.log('Save data success..react!',result);
//             window.location.href='/finalform';
    
//           }
//         )
//         .catch(err=>{
//           console.log('fails to save data.. !',err);
//         })
    
    
    
//       }
      
      
        
     
//       return (
//         <div className='container'>
//             <div className='formcontrol'>
//             <h1 className='next_2'>Beneficiary information</h1>
//     <form onSubmit={submitfun} encType='multipart/form-data'>
//       <div className="row mb-4" >
//         <label for="inputEmail3" className="col-sm-4 col-form-label next">Patient full Name</label>
//         <div class="col-sm-8">
//         <input type="text" className="form-control " id="" placeholder="Patient full Name" ref={inputref} value={patientdata.p_name} name='p_name' onChange={inputfun('p_name')} required/>
    
//         </div>
//       </div>
//       <div className="row mb-4" >
//         <label for="inputPassword3" className="col-sm-4 col-form-label next">What is the health issue?</label>
//         <div class="col-sm-8">
//         <input type="text" className="form-control " id="" placeholder="What is the health issue?" value={patientdata.health_issue} name='health_issue' onChange={inputfun('health_issue')} required/>
    
    
//         </div>
//       </div>
//       <div className="row mb-4">
//         <label for="inputPassword3" className="col-sm-4 col-form-label next">Which hospital?</label>
//         <div class="col-sm-8">
//         <input type="text" className="form-control  " id="" placeholder="Which hospital?" value={patientdata.hospital_name} name='hospital_name' onChange={inputfun('hospital_name')} required/>
    
    
//         </div>
//       </div>
//       <div className="row mb-4">
//         <label for="inputPassword3" className="col-sm-4 col-form-label next">City</label>
//         <div class="col-sm-8">
//         <input type="text" className="form-control " id="" placeholder="City" value={patientdata.city} name='city' onChange={inputfun('city')} required/>
    
//         </div>
//       </div>
      
//       <div className="row mb-4">
//         <label for="inputPassword3" className="col-sm-4 col-form-label next">Goal Amount</label>
//         <div class="col-sm-8">
//         <input type="text" className="form-control " id="" placeholder="goal_amount" value={patientdata.goal_amount} name='goal_amount' onChange={inputfun('goal_amount')} required/>
    
//         </div>
//       </div>
      
//       <div className="row mb-3" > 
//     <label for="inputEmail3" className="col-sm-4 col-form-label">Patient Documents</label>
//     <div class="col-sm-8">
//     <input type="file" className="form-control next" id=""  name='photo' placeholder="Choose Files"  onChange={inputphoto}/>

//     </div>
//   </div>
  
    
      
     
     
//      <div className="btn_align">
//           <button type="submit" className="btn ">Submit</button>
    
//      </div>
         
//     </form>
//         </div>
//         </div>
        
//         )}

// export default Photoform