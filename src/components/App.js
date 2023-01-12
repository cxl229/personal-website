import React from 'react';
import './App.css';
import Home from "./Home";

/*
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
*/

// Tut: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

/*
function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        </Router>
    );
}
*/

function App() {
    return (
        <>
        <Home/>
        </>
    );
}
  
export default App;