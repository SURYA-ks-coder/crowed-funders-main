import axios from 'axios'
import React,{ useContext,useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Bankdeatils.css'


function Bankdeatils() {
    const { id }=useParams()

const [data,setdata]=useState({
    amount:'',
    mobile_number:'',
    p_name:'',
    ac_number:'',
    confirm_ac_number:'',
    ifsc_code:'',
    branch:'',
    total_amount:'',
    p_id:id
})

const changefun=name=>(event)=>{
    setdata({...data,[name]:event.target.value})
}

const submitfun=(event)=>{
    event.preventDefault();
    const{amount,mobile_number, p_name,  ac_number,confirm_ac_number,ifsc_code, branch,p_id}=data
    const user={amount,mobile_number, p_name,  ac_number,confirm_ac_number,ifsc_code, branch,p_id}
    console.log(data);
    axios.post(`http://localhost:4000/bankdeatils`,user)
    .then(
        result=>{
          console.log('Save data success..!',result);
          window.location.href='/brosefundraiser'
          
        }
      )
      .catch(err=>{
        console.log('fails to save data...!',err);
      })
  
}





    
  return (
    <div className='container'>

        <div className=" textalign">
        <h1>Donate {data.p_name}</h1>


         <label className="form-check-label" for="flexCheckDefault" id='patient-deatils'>
                       
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur sit,  provident dicta aliquid laboriosam, maiores fugiat vel, <br />quaerat repellat quibusdam neque adipisci dolore aspernatur aliquam modi! Ipsa, nisi deleniti.
               </label>
               </div>
         
         <form id='form' className='form_box' onSubmit={submitfun} >
            <div className='form_control ' >
                    <div className="row g-3">
            
                    <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Amount"  value={data.amount} name='amount' onChange={changefun('amount')} />
            </div>
            {/* <div className="col-12">
            <input type="text" className="form-control" id="" placeholder="Amount"  value={collect_amount} name='total_amount' onChange={changefun('total_amount')} />

            </div> */}
           
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number"  value={data.mobile_number} name='p_nmobile_numberame' onChange={changefun('mobile_number')} />
            </div>
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder='Patient Name' value={data.p_name} name='p_name' onChange={changefun('p_name')}/>
            </div>
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder='Account Number'  value={data.ac_number} name='ac_number' onChange={changefun('ac_number')} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Confirom Account Number" value={data.confirm_ac_number} name='confirm_ac_number' onChange={changefun('confirm_ac_number')} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="IFSC Code"  value={data.ifsc_code} name='isfc_code' onChange={changefun('ifsc_code')}  />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Branch Name"   value={data.branch} name='branch' onChange={changefun('branch')}/>
            </div>
            
            <div className="col-12" id='sum_btn'>
                <button type="submit" className="btn btn-primary">Donate Monthly</button>
            </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Bankdeatils