import React from 'react'
import { BrowserRouter as  Router, Routes,  Route } from "react-router-dom";
import Header from './Header';
import "./App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Courses from './Courses';
import Fee from './Fee';
import Timetable from './Timetable';
import Map from './Map';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Registration from './Registration';
import Outlines from './Outlines'
function App() {
  return (

<div id='main'>
  <Router>
  <Header/>
  <Navbar/>
  <Routes>
    
    <Route path='/home' element={<Home/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/outline' element={<Outlines/>}/>
    <Route path='/fee' element={<Fee/>}/>
    <Route path='/time' element={<Timetable/>}/>
    <Route path='/map' element={<Map/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/registration' element={<Registration/>}/>
  </Routes>
    <Footer/>
</Router>
  


</div>
  )
}

export default App