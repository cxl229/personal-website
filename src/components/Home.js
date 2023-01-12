import React from "react";
import './Home.css';
import LinkText from "./LinkText";
import githubIcon from "../img/github.png";
import linkedinIcon from "../img/linkedin.png";
import computerGif from "../img/computer.gif";

function Home() {
    return (
        <>
        <div className="inlineBlock">
            <h1>Charlotte Lin</h1>
            <h2>computer programmer + digital artist</h2>
            <LinkText href="https://www.github.com/charlottexlin" text="github.com/charlottexlin" icon={githubIcon}/>
            <LinkText href="https://www.linkedin.com/in/charlotte-lin-nyu/" text="linkedin.com/charlotte-lin-nyu" icon={linkedinIcon}/>
        </div>
        <img className="inlineBlock" src={computerGif} alt=""/>
        </>
    );
}

export default Home;