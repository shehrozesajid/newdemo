import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
         <nav className="navbar ">
    <div className='container'>
         <Link to="/home"> Home</Link>
     <Link to="/courses">Courses</Link>
      <Link to="/fee">Fee</Link>
      <Link to="/time">Time Table</Link>
      <Link to="/map">Map</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/registration">Registration</Link>
    </div>
    </nav>
    </div>
  )
}

export default Navbar