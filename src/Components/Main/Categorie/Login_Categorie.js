import axios from 'axios'
import {React , useState}from 'react'
import { Link } from 'react-router-dom'
// import './Login.css'

function Login_Categorie() {
  const [logindata, setlogin] = useState({
    e_mail:'',
    password:''
  })

  const changefun=name=>(event)=>{
    setlogin({...logindata,[name]:event.target.value})
  }

  const loginfun=(event) => {
    event.preventDefault();
    const {e_mail,password}=logindata;
    const user={e_mail,password};
    console.log(logindata);
    axios.post('http://localhost:4000/login',user)
    .then(
      result=>{
        console.log(result);
        if(result.data.msg==='Login Success'){
          alert('Login Success..!')
          window.location.href='/brosefundraiser'
        }
        else if(result.data.msg==='Password Incorrect..!'){
          alert('Password Incorrect..!')

        }
        else{
          alert('Fundraiser Not Found..!')
        }
       
      }
    )
    .catch(err=>{
      console.log('fails to save data.. !',err);
    })
  
  }
  


  return (
    <div className="container">  
    <div className='formcontrol'>
        <h1>Login</h1>
        <form onSubmit={loginfun} >
                <div className="col-12">
                <input type="text" className="form-control align" id="" placeholder="Email address" name='e_mail' value={logindata.e_mail} onChange={changefun('e_mail')} required/>
            </div>
            <div className="col-12">
                <input type="text" className="form-control" id="" placeholder="Password" name='password' value={logindata.password} onChange={changefun('password')} required />
            </div>
           
  
           <label className="login" > I'm not a member?
           
           <Link to='/brosefundraiser'>Join Us</Link> 
           
           </label>
              <div className='btn-center'>
                <button type="submit"  id='buttonshadow' >Next</button>
               </div>
        </form>
        
                </div>

    </div>
  )
}

export default Login_Categorie