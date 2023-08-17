import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'





export const Create_patientcontext=createContext()

 
 function Create_patientProvider({children}) {
    const [get_patient_data,setget_patient_data]=useState()
    const [loading,setloading]=useState()
    useEffect( ()=>{
        
        
        axios.get('http://localhost:4000/create_get_fundraiser')
        .then(
            result=>{
                console.log('get_patient data',result);
                setget_patient_data(result.data.getdata)
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
     <Create_patientcontext.Provider value={{get_patient_data,loading,setloading}}>
        {children}
     </Create_patientcontext.Provider>
   )
 }

export default Create_patientProvider