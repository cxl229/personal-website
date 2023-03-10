import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import portrait from "../img/portrait.jpg";

function About() {
    const bio = "I am a student at New York University (class of 2023) with a major in computer science and a minor in digital art & design. " +
    "I'm passionate about applying creativity to computing in order to solve problems and develop unique programs. " +
    "In my free time, I like to read, write, and do game development. Please check out some of my coding projects on the projects page.";
    return (
        <motion.div
            initial={{x: "50%"}}
            animate={{x: 0}}
            exit={{x: window.innerWidth}}
            transition={{type: "spring", bounce: 0.3, duration: 0.2}}
        >
            <h2>About</h2>
            <div className="aboutBlock">
                <img className="dropShadow portrait" src={portrait} alt="Photograph of Charlotte with her cat"/>
                <div>
                    <h3 className="bio">Hi, I'm Charlotte Lin!</h3>
                    <p className="bio">
                        {bio}
                        <br/><br/>
                        If you'd like to contact me, please email me at <a className="emailAddress" href="mailto:charlottexlin02@gmail.com">charlottexlin02@gmail.com</a>.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;