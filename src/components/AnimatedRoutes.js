import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

// CITATIONS
// Page transition animation using Framer Motion - adapted from code by PedroTech: https://www.youtube.com/watch?v=FdrEjwymzdY

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;