import React from 'react';
import './Project.css';
import LinkText from './LinkText';

function Project(props) {
    const links = props.links.map((link, index) => {
        return (
            <LinkText icon={link.icon} text={link.text} href={link.href} key={index}></LinkText>
        );
    });

    // Show that a project is featured
    let featuredText = props.featured ? "featured" : "";
    let featuredStar = props.featured ? " ★" : "";

    return (
        <div className="project dropShadow">
            <img className="projectImage" src={props.image} alt={props.projectName + " image"}/>
            <div className="projectText">
                <h4>{props.projectName}</h4>
                <h5 className="featuredTag">
                    <div className="featuredText">{featuredText}</div>
                    <div className="featuredStar">{featuredStar}</div>
                </h5>
                <h5>{props.subtitle}</h5>
                <h6>{props.techStack}</h6>
                <div className="projectDescription">
                    {props.description}
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Project;