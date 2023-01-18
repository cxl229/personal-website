import React from "react";
import { motion } from 'framer-motion';
import './Home.css';
import LinkText from "./LinkText";
import githubIcon from "../img/github.png";
import linkedinIcon from "../img/linkedin.png";
import computerGif from "../img/computer.gif";

function Home() {
    return (
        <motion.div
            initial={{x: "50%"}}
            animate={{x: 0}}
            exit={{x: window.innerWidth}}
            transition={{type: "spring", bounce: 0.3, duration: 0.2}}
        >
            <div className="homeInlineBlock leftBlock">
                <h1>Charlotte Lin</h1>
                <h3>computer programmer + digital artist</h3>
                <LinkText href="https://www.github.com/cxl229" text="github.com/cxl229" icon={githubIcon}/>
                <LinkText href="https://www.linkedin.com/in/charlottexlin/" text="linkedin.com/charlottexlin" icon={linkedinIcon}/>
            </div>
            <img className="homeInlineBlock" src={computerGif} alt=""/>
        </motion.div>
    );
}

// Animation without bounce
/*
<motion.div
    initial={{x: window.innerWidth}}
    animate={{x: 0}}
    exit={{x: window.innerWidth}}
    transition={{duration: 0.2}}
>
*/

export default Home;