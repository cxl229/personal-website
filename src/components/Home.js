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
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="homeInlineBlock leftBlock">
                <h1>Charlotte Lin</h1>
                <h3>computer programmer + digital artist</h3>
                <LinkText href="https://www.github.com/charlottexlin" text="github.com/charlottexlin" icon={githubIcon}/>
                <LinkText href="https://www.linkedin.com/in/charlotte-lin-nyu/" text="linkedin.com/charlotte-lin-nyu" icon={linkedinIcon}/>
            </div>
            <img className="homeInlineBlock" src={computerGif} alt=""/>
        </motion.div>
    );
}

export default Home;