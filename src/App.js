import React from 'react';
import{BrowserRouter as Router,Route,Switch } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Components/Header/Navbar';
import Monthlydonate from './Components/Main/Monthlydonate/Monthlydonate';
import Maincontent from './Components/Main/Start a Fundraiser/Maincontent';
import Categories from './Components/Main/Categorie/Categories';
import Crowedfunding from './Components/Main/Crowedfunding/Crowedfunding';
import Footer from './Components/Footer/Footer';
import Howitwork from './Components/Main/Howitwork/Howitwork';
import FundForm from './Components/Main/Start a Fundraiser/Fundform/FundForm';
import Monthlyform from './Components/Main/Monthlydonate/Monthlyform/Monthlyform';
import Success from './Components/Main/Crowedfunding/Success/Success';
import Login from './Components/Signin/Login';
import Nextform from './Components/Main/Start a Fundraiser/Fundform/Nextform';
import Finalform from './Components/Main/Start a Fundraiser/Fundform/Finalform';
import Brosefundraiser from './Components/Main/Brosefundraiser/Brosefundraiser';
import ScrollToTop from './Components/Main/ScrollToTop';
import About from './Components/Main/About/About';
import Register from './Components/Admin Page/Registerpage/Register';
import Adminmain from './Components/Admin Page/Adminmain';
import Donateform from './Components/Main/Categorie/Donateform';
import Bankdeatils from './Components/Main/Categorie/Bankdeatils';
import Monthlyfinial from './Components/Main/Monthlydonate/Monthlyform/Monthlyfinial';
import Register_page from './Components/Signin/Register_page';
import Login_Categorie from './Components/Main/Categorie/Login_Categorie';
import Monthly_2_page from './Components/Main/Monthlydonate/Monthly_2_page';



function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Maincontent} >
          
      <Maincontent/>

      <Monthlydonate/>
      
      <Categories/>
      <Howitwork/>
      <Crowedfunding/>
     
      </Route>
      <Route exact path='/home' component={Maincontent} >
          
      <Maincontent/>

      <Monthlydonate/>
      
      <Categories/>
      <Howitwork/>
      <Crowedfunding/>
     
      </Route>

      <Route path='/StartaFundraiser' component={FundForm} >
        <FundForm/>

      </Route>
      <Route path='/MonthlyDonate'  >
        <Monthlyform/>
      </Route>
      <Route path='/sucessstories/:id' component={Success} >
      <Success/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/nextform' component={Nextform}>
        <Nextform/>
      </Route>
      <Route path='/finalform' component={Finalform}>
        <Finalform/>
      </Route>
      <Route path='/about' component={About}>
        <About/>
      </Route>
      <Route path='/brosefundraiser' component={Brosefundraiser}>
        <Brosefundraiser/>
      </Route>
      
      <Route path='/admin'>
        <Adminmain/>
      </Route>
      {/* <Route path='/donateform'>
        <Donateform/>
      </Route> */}
      <Route path='/bankdeatils/:id'>
        <Bankdeatils/>
      </Route>
      <Route path='/monthlyfinal'>
        <Monthlyfinial/>
      </Route>
      <Route path='/registerpage'>
        <Register_page/>
      </Route>
      
      <Route path='/loginCategorie'>
        <Login_Categorie/>
      </Route>
      <Route path='/monthly2'>
        <Monthly_2_page/>
      </Route>
      
      </Switch>
      
      
      <Footer/>
      
      
    </div>
    </Router>
  );
}

export default App;
