import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'





export const Photocontext=createContext()

 
 function PhotocontextProvider({children}) {
    const [get_patient_photo,setget_patient_photo]=useState()
    const [load,setload]=useState()
    useEffect( ()=>{
        
        
        axios.get('http://localhost:4000/get_photo')
        .then(
            result=>{
                console.log('get_patient data',result.data.getdata);
                setget_patient_photo(result.data.getdata)
                setload(false)

       }
        )
        .catch(
            err=>{
                console.log(`con't get data`,err);
            }
        )
    },[])
    




     
if (load){
    return <div>Loading</div>
}

   return (
     <Photocontext.Provider value={{get_patient_photo,load,setload}}>
        {children}
     </Photocontext.Provider>
   )
 }

export default PhotocontextProvider