import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar= () =>{
  return (
  <div className="navbar">
    <Link to="/" className="link">
      <li className="rightMargin">home</li>
    </Link>
    <Link to="/about" className="link">
      <li className="rightMargin">about</li>
    </Link>
    <Link to="/projects" className="link">
      <li>projects</li>
    </Link>
  </div>
  );
}

export default Navbar;