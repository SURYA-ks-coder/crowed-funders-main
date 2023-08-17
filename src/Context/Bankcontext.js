import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'


 export const Bankcontext=createContext()

 
 function BankcontextProvider({children}) {
    const [getdata,setgetdata]=useState()
    const [loading,setloading]=useState()
    useEffect(()=>{
        axios.get('http://localhost:4000/get_bank_deatils') 
        .then(result=>{
          console.log('get register  update data successful...',result);
            setgetdata(result.data.result)
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
     <Bankcontext.Provider value={{getdata,loading,setloading}}>
        {children}
     </Bankcontext.Provider>
   )
 }
 
 export default BankcontextProvider