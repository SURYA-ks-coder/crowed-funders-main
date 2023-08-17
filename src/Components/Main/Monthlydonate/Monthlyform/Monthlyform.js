import axios from 'axios'
import { useEffect, useRef,React , useState }from 'react'

import './Monthlyform.css'


function Monthlyform() {
    
     
      const [donate,setdonate]= useState({
                            type_of_money:'',
                            amount:'',
                            full_name:'',
                            mobile_number:'',
                            e_mail:'',
                            ac_number:'',
                            ifsc_code:''
                        })
    
      const changefn = name=>(event)=>{
        setdonate({...donate,[name]:event.target.value})

    }
    
      
      
    const submitfn= (event)=>{

        event.preventDefault();
        const { type_of_money, amount,full_name,mobile_number,e_mail,ac_number,ifsc_code } = donate;
        const user = { type_of_money,amount,full_name,mobile_number,e_mail,ac_number,ifsc_code };
        console.log(donate);
        axios.post('http://localhost:4000/monthly_donate',user)
        .then(
            result=>{
              console.log('Save data success..!',result);
              window.location.href='/monthlyfinal'
            }
          )
          .catch(err=>{
            console.log('fails to save data...!',err);
          })
      
    }

    const inputref= useRef(null)
  useEffect(() => {
    inputref.current.focus()

  },[])
  return (
  
    <div className=' fm_img'>
        <div className='container'>
       <div id='text_align'>
        <h3>Critical Inlinesses Are killing patient in india</h3>
        <p>Save them with timely and quality healthcare</p>
        </div>
        
        <form id='form' onSubmit={submitfn}>
            <div className='form_control'>
                    <div className="row g-3">
{/*             
            <div className="col-4">
                <select className="form-select" aria-label="Default select example" value={donate.type_of_money} name='type_of_money' onChange={changefn('type_of_money')}>
                    <option selected>INR</option>
                    <option value="1">USD</option>
                    <option value="2">GBR</option>
                    <option value="3">EURO</option>
                </select>

            </div> */}
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Amount" ref={inputref} value={donate.amount} name='amount' onChange={changefn('amount')}  required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Full Name"value={donate.full_name} name='full_name' onChange={changefn('full_name')} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number" value={donate.mobile_number} name='mobile_number' onChange={changefn('mobile_number')} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Email" value={donate.e_mail} name='e_mail' onChange={changefn('e_mail')} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Account Number" value={donate.ac_number} name='ac_number' onChange={changefn('ac_number')} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="IFSC Code" value={donate.ifsc_code} name='ifsc_code' onChange={changefn('ifsc_code')} required/>
            </div>
            {/* <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck" value={donate.agree} name='agree' onChange={changefn(('agree').checked)} >
                I want to receive transaction updates / alerts on WhatsApp
                </label>
                </div>
            </div> */}
            <div className="col-12" id='sum_btn'>
                <button type="submit" className="btn btn-primary">Donate Monthly</button>
            </div>
            </div>
        </div>
        </form>
    </div>
    </div>
    
  )
}

export default Monthlyform