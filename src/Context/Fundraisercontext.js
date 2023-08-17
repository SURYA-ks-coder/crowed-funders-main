import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'


 export const Fundraisercontext=createContext()

 
 function FundraisercontextProvider({children}) {
    const [getdata,setgetdata]=useState()
    const [loading,setloading]=useState()
    useEffect(()=>{
        axios.get('http://localhost:4000/get_fundraiser') 
        .then(result=>{
          console.log('get register  update data successful...',result);
            setgetdata(result.data.getdata)
            setloading(false)
           
               
        })
         .catch(err=>{
             console.log('error',err);
         })
         
         
        
     }, [])





     
if (loading){
    return <div>Loading</div>
}

   return (
     <Fundraisercontext.Provider value={{getdata,loading,setloading}}>
        {children}
     </Fundraisercontext.Provider>
   )
 }
 
 export default FundraisercontextProvider