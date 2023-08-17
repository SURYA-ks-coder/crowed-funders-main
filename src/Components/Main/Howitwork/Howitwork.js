import React from 'react'
import MediaQuery from 'react-responsive'
import './Howitwork.css'
import calender from '../image/calender.png'
import child from '../image/child face.png'
import bell from '../image/bell.png'

function Howitwork() {
  return (
          
    
   
           <div className='container 'id='how_center'>
           <h1 className='text-center m-5'>How It Works</h1>

                <div className="row how_it_work">
                <div className='col align-self-start alignment' id='align_work'>
                <img src={calender} alt="calender" className='cal_width'/>
                <div  className='text-start' >
                <h5>1.Start Your Monthly Subscription</h5>
                <p>Choose your donation amount,add 
                relevant deatils and select your preferred <br />
                payment method to begin your Subscription.
                </p>
                </div>
                </div>
                <div className='col align-self-center alignment chil_dir' id='align_work'>
                <img src={child} alt="child" className='cal_width'/>
                <div  className='text-start'>

                <h5>2.Support Critical Children Every Month</h5>
                <p>Skyup will automatically direct your 
                monthly donations to one or more patients <br />
                requiring immediate medical care!
                </p>
                </div>
                </div>
                <div className='col align-self-end alignment' id='align_work'>
                <img src={bell} alt="bell" className='cal_width'/>
                <div  className='text-start'>

                <h5>3.Receive Fund Utilization Reports</h5>
                <p>See hoe each donation made by you 
                helped change lives with monthly <br />
                fund utilization reports sent directly
                to your mail.
                </p>
                </div>
                </div>
                </div>
                </div>
      
    
          
    
  )
}

export default Howitwork