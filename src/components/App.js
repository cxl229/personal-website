import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

// CITATIONS: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/ and https://blog.logrocket.com/creating-navbar-react/

function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        </Router>
    );
}

export default App;