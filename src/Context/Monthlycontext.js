import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'


 export const Monthlycontext=createContext()

 
 function MonthlycontextProvider({children}) {
    const [getdata,setgetdata]=useState()
    const [loading,setloading]=useState()
    useEffect(()=>{
        axios.get('http://localhost:4000/get_monthly_donate') 
        .then(result=>{
          console.log('get   update data successful...',result);
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
     <Monthlycontext.Provider value={{getdata,loading,setloading}}>
        {children}
     </Monthlycontext.Provider>
   )
 }
 
 export default MonthlycontextProvider