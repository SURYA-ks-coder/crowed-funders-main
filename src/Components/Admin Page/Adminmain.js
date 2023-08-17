import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Registerpage/Register'
// import Patient from './Patient page/Patient'
import Monthly from './Monthly Donate/Monthly'

import './Admin.css'
import{BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Bank_deatils from './Bank Deatils/Bank_deatils'
import Nav from './Admin Navbar/Nav'
import Updateregister from './Registerpage/Updateregister'
import Updatepatient from './Patient_Image/Updatepatient'
import Updatemonthly_donate from './Monthly Donate/Updatemonyhlydonate'
import Updatebank from './Bank Deatils/Updatebank'
import Deleteregister from './Registerpage/Deleteregister'
// import Deletepatient from './Patient page/Deletepatient'
import Deletemonthly from './Monthly Donate/Deletemonthly'
import Deletebank from './Bank Deatils/Deletebank'
import Get_patient_img from './Patient_Image/Get_patient_img'
import Deletepic from './Patient_Image/Delete_patient'
import Create_Fundraiser from './Create Patient/Create_Fundraiser'
import Fondraiser_form_create from './Create Patient/Fondraiser_form_create'
import Get_create_patient from './Create Patient/Get_create_patient'
import ScrollToTop from '../Main/ScrollToTop'
import Delete_create_fundraiser from './Create Patient/Delete_create_fundraiser'


function Adminmain() {
  return (
    <Router>
      <Nav/>
    <div className="container " >
    
              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Log Out
              </button> */}
              
    <div className='row'>
        <div className='col-sm-2' id='align-row'>
        <div className='col-sm-4' id='text_move'>

            <Link to='/registeradmin' id='text'>Start a Fundraiser</Link>
            </div>
        <div className='col-sm-4' id='text_move'>

            <Link to='/get_photo' id='text' >Patient</Link>
            </div>
        <div className='col-sm-4' id='text_move'>

            <Link to='/monthly' id='text' >Monthly Donate</Link>
            </div>
            <div className='col-sm-4' id='text_move'>

            <Link to='/bankdeatils' id='text' >Bank Deatils</Link>
            </div>
            {/* <div className='col-sm-4' id='text_move'>

            <Link to='/get_photo' id='text' >Patient Photos</Link>
            </div> */}
            <div className='col-sm-4' id='text_move'>

            <Link to='/get_createpatient' id='text' >create</Link>
            </div>


        </div>
      <ScrollToTop/>

        <Switch>
          
        <div className='col-sm-10'>
        <Route path='/registeradmin'>
            <Register/>
        </Route>
        {/* <Route path='/patient'>
          <Patient/>
        </Route> */}
        <Route path='/monthly'>
          <Monthly/>
        </Route>
        <Route path='/bankdeatils'>
          <Bank_deatils/>
        </Route>
        <Route path='/updateregister/:id' component={Updateregister}>
        <Updateregister/>
      </Route>
      <Route path='/updatepatient/:id'>
        <Updatepatient/>
      </Route>
      <Route path='/updatemonthly/:id'>
        <Updatemonthly_donate/>
      </Route>
      <Route path='/updatebank/:id'>
              <Updatebank/>
      </Route>
      <Route path='/deleteregister/:id'>
        <Deleteregister/>
      </Route>
      {/* <Route path='/deletepatient/:id'>
        <Deletepatient/>
      </Route> */}
      <Route path='/deletemonthly/:id'>
        <Deletemonthly/>
      </Route>
      <Route path='/deletebank/:id'>
        <Deletebank/>
      </Route>
      <Route path='/get_photo'>
        <Get_patient_img/>
      </Route>
      {/* <Route path='/updatephoto/:id'>
        <Update_patient_img/>
      </Route> */}
      <Route path='/deletephoto/:id'>
        <Deletepic/>
      </Route>
      <Route path='/createfundraiser/:id'>
        <Create_Fundraiser/>
      </Route>
      <Route path='/createfundraiser_form/:id' >
        <Fondraiser_form_create/>
      </Route>
      <Route path='/get_createpatient'>
        <Get_create_patient/>
      </Route>
      <Route path='/delete_create_fundraiser/:id'>
        <Delete_create_fundraiser/>
      </Route>
        </div>
        
        </Switch>
        
        </div>
    </div>
    </Router>
  )
}

export default Adminmain