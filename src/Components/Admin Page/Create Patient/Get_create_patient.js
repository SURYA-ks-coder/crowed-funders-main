import axios from 'axios';
import React, { useEffect, useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import { Create_patientcontext } from '../../../Context/Create_patientcontext';

function Get_create_patient() {
// const {getdata,loading,setloding}=useContext(Create_patientcontext)
// console.log(getdata);


    const [getdata,setgetdata]=useState([])


 useEffect(()=>{
         axios.get('http://localhost:4000/create_get_fundraiser') 
         .then(result=>{
           console.log('get_create_patient data successful...',result);
           setgetdata(result.data.getdata)
         })
          .catch(err=>{
              console.log('error',err);
          })
      }, [])

  return (
    <div className="container">
      
         
      { 
      getdata.length
      ?getdata.map((list)=>{
        return(
            <div className="row" id='section'>
               <div className="col-sm-3 "  >
              <img src={list.img} alt="" id='image_size'/> 
              </div>
              <div className="col-sm-2" >
                      <p >{list.p_name}</p>
              </div>
              <div className="col-sm-4" >
                      <p>{list.content}</p>
              </div>
              <div className="col-sm-1" >
                      <p>{list.amount}</p>
              </div>

              

             
              
              <div className="col-sm-2" >
                      <Link to={`/delete_create_fundraiser/${list._id}`}>
                        <button type='submit' className='btn'>Delete</button>
                        </Link>

                
              </div>
              

             
              
          </div>

        )}
        )
        :null
    
    }
</div>
    
  )
}

export default Get_create_patient