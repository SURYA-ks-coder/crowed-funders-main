import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import './Register.css'

function Monthly() {
    const [getdata,setgetdata]=useState([])

  useEffect(()=>{
       axios.get('http://localhost:4000/get_monthly_donate') 
       .then(result=>{
         console.log(' get Monthly data successful...',result);
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
               {/* <div className="col-sm-2" >
                      <p >{list.type_of_money}</p>
              </div> */}
              <div className="col-sm-1" >
                      <p >{list.amount}</p>
              </div>

              <div className="col-sm-2" >      
                      <p >{list.full_name}</p>
              </div>

              <div className="col-sm-2" >      
                      <p >{list.mobile_number}</p>
              </div>

              <div className="col-sm-3" >
                      <p >{list.e_mail}</p>
              </div>

              <div className="col-sm-2" >
              <Link to={`/updatemonthly/${list._id}`}><button type='submit' className='btn'>Update</button></Link>

                
              </div>
              <div className="col-sm-2" >
                      <Link to={`/deletemonthly/${list._id}`}><button type='submit' className='btn'>delete</button></Link>

                
              </div>
          </div>

        )}
        )
        :null
    
    }
</div>
    
  )
}

export default Monthly
