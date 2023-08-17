import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    const [getdata,setgetdata]=useState([])

  useEffect(()=>{
       axios.get('http://localhost:4000/get_fundraiser') 
       .then(result=>{
         console.log('get register data successful...',result);
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
               <div className="col-sm-2" >
                      <p >{list.fundraise_for}</p>
              </div>
              <div className="col-sm-2" >
                      <p >{list.full_name}</p>
              </div>

              <div className="col-sm-2" >      
                      <p >{list.e_mail}</p>
              </div>

              <div className="col-sm-2" >      
                      <p >{list.mobile_number}</p>
              </div>

              {/* <div className="col-sm-2" >
                      <p key={list.id}>{list.password}</p>
              </div> */}

              <div className="col-sm-2" >
        <Link to={`/updateregister/${list._id}`}> 
        <button type='submit' className='btn'>Update</button></Link>

                
              </div>
              <div className="col-sm-2" >
                      <Link to={`/deleteregister/${list._id}`}><button type='submit' className='btn'>delete</button></Link>

                
              </div>
              
          </div>

        )}
        )
        :null
    
    }
</div>
    
  )
}

export default Register




 //     <div className="col-sm-2" key={value.id} >
        //     </div>
        //     <div className="col-sm-2" key={value.id} >
        //     </div>
        //     <div className="col-sm-2" key={value.id} >
        //     </div>
        //     <div className="col-sm-2" key={value.id} >
        //     </div>