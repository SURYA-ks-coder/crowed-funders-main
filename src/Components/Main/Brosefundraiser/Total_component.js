import React, { useContext,useEffect, useState  } from 'react'

import { Bankcontext } from '../../../Context/Bankcontext'

function Total_component(amount) {
  const {getdata,loading,setloding}=useContext(Bankcontext)



//   var result=0

//     useEffect(()=>{

      
//         const data= getdata.filter((f)=>(f.p_id === amount.amount ) )
//         console.log(data);
//         var donate_amount=data.map((e)=>parseInt(e.amount) )
//         console.log('hi',donate_amount);
//       settotal_amount(donate_amount)
//       console.log('data.amount',donate_amount);
//       console.log('total_amount',total_amount);

//       forfun();
//   },[])

// const forfun=()=>{
//         total_amount.push(0)
//   for( let i=0;i<=total_amount.length;i++){
//                      result +=total_amount[i]
//                      console.log(result);
//                 }
                
// }


useEffect(()=>{
  matchfun()
},[])
       var result=0
      // const [goal_amount,setgoal_amount]=useState('')
       const [total_amount,settotal_amount]=useState([])

  const matchfun =async ()=>{
       var total_value

    try{
  
        let data=await  getdata.filter((f)=>(f.p_id === amount.p_id ) )
        console.log(data);
         total_value=data.map((e)=>parseInt(e.amount) )
        //  let goal_value=data.map((e)=>parseInt(e.goal_amount))
        // console.log('goal_amount',goal_value);

        if(total_value=== []){
          total_value.push(0)
        }
        for( let i=0;i<total_value.length;i++){
            result +=total_value[i];
             console.log("hi");
        }
        console.log('result',result); 
            settotal_amount(result)

        //  return   result
}
      catch(err){
        console.log(err);
      }
     
        // return result
      }
      console.log(matchfun());
  return (
    <>
      Total Donation: {total_amount}
       
       
      
    </>
  )
}

export default Total_component