import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar= () =>{
  return (
  <div className="navbar">
    <Link to="/">
        <li>home</li>
    </Link>
    <Link to="/about">
        <li>about</li>
    </Link>
    <Link to="/portfolio">
        <li>portfolio</li>
    </Link>
  </div>
  );
}

export default Navbar;