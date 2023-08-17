import axios from 'axios'
import { useEffect, useRef,React , useState, useContext }from 'react'
import { useParams } from 'react-router-dom'
import { Monthlycontext } from '../../../Context/Monthlycontext'



function Updatemonthly_donate() {
    
     
     
    const { id }=useParams()
  

    
    const [type_of_money,settype_of_money]=useState('')
  const [amount,setamount]=useState('')
  const [full_name,setfull_name]=useState('')
  const [mobile_number,setmobile_number]=useState('')
  const [e_mail,sete_mail]=useState('')
  
  const {getdata,loading,setloding}=useContext(Monthlycontext)
  
      useEffect(()=>{
        const matchfun =async ()=>{
        try{
           
            let data=await getdata.filter((f)=>(f._id)===(id))
            
            console.log(data);
            if(data[0]){
            console.log('hi');
                settype_of_money(data[0].type_of_money)
                setamount(data[0].amount)
                setfull_name(data[0].full_name)
                setmobile_number(data[0].mobile_number)
                sete_mail(data[0].e_mail)
  
  
        }
    }
          catch(err){
            console.log(err);
          }
            return 
          }
      matchfun()
     },[])
      
      
    const submitfun= (event)=>{

        event.preventDefault();
        const user = { type_of_money:type_of_money,amount:amount,full_name:full_name,mobile_number:mobile_number,e_mail:e_mail };
        axios.post(`http://localhost:4000/updatemonthly_donate/${id}`,user)
        .then(
            result=>{
              console.log('Save data success..!',result);
            //   window.location.href='/monthlyfinal'
            }
          )
          .catch(err=>{
            console.log('fails to save data...!',err);
          })
      
    }

//     const inputref= useRef(null)
//   useEffect(() => {
//     inputref.current.focus()

//   },[])
  return (
  
    <div className=' fm_img'>
        <div className='container'>
       <div id='text_align'>
        <h3>Critical Inlinesses Are killing patient in india</h3>
        <p>Save them with timely and quality healthcare</p>
        </div>
        
        <form id='form' onSubmit={(e)=>submitfun(e)}>
            <div className='form_control'>
                    <div className="row g-3">
            
            <div className="col-4">
                <select className="form-select" aria-label="Default select example" value={type_of_money} name='type_of_money' onChange={(e)=>settype_of_money(e.target.value)}>
                    <option selected>INR</option>
                    <option value="1">USD</option>
                    <option value="2">GBR</option>
                    <option value="3">EURO</option>
                </select>

            </div>
            <div className="col-md-8">
                <input type="text" className="form-control" value={amount} name='amount' onChange={(e)=>settype_of_money(e.target.value)} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Full Name"value={full_name} name='full_name' onChange={(e)=>setfull_name(e.target.value)} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Mobile Number" value={mobile_number} name='mobile_number' onChange={(e)=>setmobile_number(e.target.value)} />
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Email" value={e_mail} name='e_mail' onChange={(e)=>sete_mail(e.target.value)} />
            </div>
           
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

export default Updatemonthly_donate