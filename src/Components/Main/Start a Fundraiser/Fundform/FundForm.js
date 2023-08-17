import React, { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import './FundForm.css'
import axios from 'axios'

function FundForm() {
    // const [data, setdata] = useState({
    //     fundraisefor:'',
    //     fullname:'',
    //     email:'',
    //     mobilenumber:'',
    //     password:''
    // })



    const [fundraise_for,setfundraisefor]=useState('');
    const [full_name,setfullname]=useState('');
    const [e_mail,setemail]=useState('');
    const [mobile_number,setmobilenumber]=useState('');
    const [password,setpassword]=useState('');
    const [i_agree,seti_agree]=useState();

    // const chancefun=(event)=>{
    //     setdata({[event.target.value]:event.target.name})

    // }

    const submitfun=(event)=>{
        event.preventDefault()
        
        const data={fundraise_for:fundraise_for,full_name:full_name,e_mail:e_mail,mobile_number:mobile_number,password:password,i_agree:i_agree}
        console.log(data);
        axios.post('http://localhost:4000/fundraiser',data)
        .then(
            result=>{
                console.log('save data success..!',result);
              window.location.href='/finalform';
               
            }

        )
        
        .catch(err=>{
            console.log('fails to save...!',err);
        })
        
    }

    const inputref= useRef(null)
    useEffect(() => {
      inputref.current.focus()
    
      
    },[])
    
  return (
      
    <div className="container">  
    <div className='formcontrol'>
        <h1>Start a Fundraiser</h1>
        <form onSubmit={(e)=>submitfun(e)} >
            <div className="col-12">
               < input type="text" className="form-control" id="" placeholder=" Fundraise for:Medical" ref={inputref} name='fundraise_for' value={fundraise_for} onChange={(e)=>setfundraisefor(e.target.value)} required/>
                </div>
                <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Full Name" name='fullname' value={full_name} onChange={(e)=>setfullname(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Email" name='email' value={e_mail} onChange={(e)=>setemail(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number" name='mobilenumber' value={mobile_number} onChange={(e)=>setmobilenumber(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="Password" className="form-control" id="" placeholder="Password" name='password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>
            
                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={i_agree}  onChange={(e)=>seti_agree(e.target.checked)} id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                       
                            I agree with the Terms of Use, Privacy Policy, 
                            and Cookie Policy thereby the authenticity,usage, and
                            <br /> safety of information shared with & by ImpactGuru.
                    </label>
                
                <label className="login" >
                    Already a member?<Link to='/login'>Login</Link>
                </label>
                
                </div>
                <div id='btn'>
              
                
            <button type="submit"  id='buttonshadow' >Next</button>
                    

                </div>

        </form>
    </div>
    </div>
  )
}

export default FundForm