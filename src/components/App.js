import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

// CITATIONS
// General reference: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
// Navbar reference: https://blog.logrocket.com/creating-navbar-react/
// Page transition animation using Framer Motion - adapted from code by PedroTech: https://www.youtube.com/watch?v=FdrEjwymzdY
// Page transition animation using Framer Motion article: https://www.section.io/engineering-education/page-transition-in-react-using-framer-motion/
// Framer Motion documentation examples for slide transition: https://www.framer.com/motion/examples/

function App() {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    );
}

export default App;