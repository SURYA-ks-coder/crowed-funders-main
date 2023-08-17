import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'


 export const Patientcontext=createContext()

 
 function PatientcontextProvider({children}) {
    const [getdata,setgetdata]=useState()
    const [loading,setloading]=useState()
    useEffect( ()=>{
        
        
        axios.get('http://localhost:4000/get_photo')
        .then(
            result=>{
                console.log('get_patient data',result.data.getdata);
                setgetdata(result.data.getdata)
                setloading(false)

       }
        )
        .catch(
            err=>{
                console.log(`con't get data`,err);
            }
        )
    },[])
    




     
if (loading){
    return <div>Loading</div>
}

   return (
     <Patientcontext.Provider value={{getdata,loading,setloading}}>
        {children}
     </Patientcontext.Provider>
   )
 }
 
 export default PatientcontextProvider





