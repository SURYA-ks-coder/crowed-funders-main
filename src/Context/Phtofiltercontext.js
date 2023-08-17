import React, { createContext ,useState,useEffect} from "react";
import axios from 'axios'





export const Photofilitercontext=createContext()

 
 function PhotofilitercontextProvider({children}) {
    const [get_photo_filiter,setget_photo_filiter]=useState()
    const [load,setload]=useState()
    useEffect(()=>{
        const matcfhfun =async ()=>{
          try{
         let card_img= get_patient_photo.filter((f)=>(f.img)===(img))
      console.log('card',card_img);
      setimage(card_img)
      }
            
      
            catch(err){
              console.log(err);
            }
              return 
          }
        matcfhfun()
          
         },[])
    




     
if (load){
    return <div>Loading</div>
}

   return (
     <Photofilitercontext.Provider value={{get_patient_photo,load,setload}}>
        {children}
     </Photofilitercontext.Provider>
   )
 }

export default PhotofilitercontextProvider