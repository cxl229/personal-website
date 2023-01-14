import React from 'react';
import './Project.css';
import LinkText from './LinkText';

function Project(props) {
    const links = props.links.map((link) => {
        return (
            <LinkText icon={link.icon} text={link.text} href={link.href}></LinkText>
        );
    });

    return (
        <div className="project dropShadow">
            <img className="projectImage" src={props.image} alt={props.projectName + " image"}/>
            <div>
                <h4>{props.projectName}</h4>
                <h5>{props.subtitle}</h5>
                <h6>{props.techStack}</h6>
                <p className="projectDescription">
                    {props.description}
                    {links}
                </p>
            </div>
        </div>
    );
}

export default Project;