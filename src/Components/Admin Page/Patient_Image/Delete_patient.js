import axios from 'axios'
import {React , useEffect, useState }from 'react'
import { useParams } from 'react-router-dom';





function Deletepic() {

    const { id }=useParams()
const [getdata,setgetdata]=useState([])
const [pic,setpic]=useState('')

  
    useEffect( ()=>{
        
        
        axios.get('http://localhost:4000/get_photo')
        .then(
            result=>{
                console.log('get_photo ',result.data.getdata);
                setgetdata(result.data.getdata)

       }
        )
        .catch(
            err=>{
                console.log(`con't get data`,err);
            }
        )
    },[])
  



    useEffect(()=>{
      const matchfun =async ()=>{
      try{
         
          let data=await getdata.filter((f)=>(f._id)===(id))
          
          console.log(data);
          if(data[0]){
          console.log('hi');
              setpic(data[0].img)
            

      }
  }
        catch(err){
          console.log(err);
        }
          return 
        }
    matchfun()
   },[getdata])

   

console.log('welcom',pic);
  const submitfun=(event)=>{
    event.preventDefault();
    
    axios.post(`http://localhost:4000/deletephoto/${id}`,pic )

    .then(
      result=>{
        console.log('delete success..react!',result);
        alert("delete photo success...!")
        window.location.href='/admin';
        window.location.href='/admin/get_photo';

      }
    )
    .catch(err=>{
      console.log('fails to delete .. !',err);
    })



  }

  return(
    <div className='container'>
    <form onSubmit={(e)=>submitfun(e)}>
        <h1>Confirm Delete the {pic} Data.!</h1>
    <button type='submit' className='btn'  >Delete</button>
    </form>
        </div>
  )
}
export default Deletepic
  