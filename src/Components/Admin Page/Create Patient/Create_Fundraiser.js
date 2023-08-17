// import axios from 'axios';
// import React, { useEffect, useState, useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom';
// import { Create_patientcontext } from '../../../Context/Create_patientcontext';



// function Create_Fundraiser() {

// const [p_name, setp_name] = useState('')
// const [image, setimage]=useState([])
// const [content,setcontent]=useState('')

//   const { id }=useParams()

// const {getdata,loading,setloding}=useContext(Create_patientcontext)

// useEffect(()=>{
//   const matchfun =async ()=>{
//   try{
     
//       let data=await getdata.filter((f)=>(f._id)===(id))
//       console.log('data',data);
//       if (data){
//         console.log('pname',data[0].p_name);
//         console.log('image',data[0].img);
//         setp_name(data[0].p_name)
//         setimage(data[0].img)
//         setcontent(data[0].content)

//         }
       
      
      
//     }
//           catch(err){
//             console.log(err);
//           }
//             return 
//           }
//       matchfun()
//      },[])

 



//   return (
    
//     <div className="main-card">
//     <div className="row row-cols-1 row-cols-md-6 g-4">
  
    
//         <div className="col col-mar">
//           <div className="card h-100">
//             <img src={image} className="card-img-top" alt="fundraisers"/>
//             <div className="card-body">
//               <div className='title'>
//               <a href="#" className='verified'>
            
//                   Verified</a>
//                   <p> {p_name}</p>
//                   </div>
                 
//               <p className="card-title ">
//                 {content}
//               </p>
               
//               <Link to='/login'><a href="#"  id='btn'>Donate </a></Link>
//             </div>
//           </div>
//         </div>
        
    
   
//     </div>
//     </div>
    

//   )
// }

// export default Create_Fundraiser