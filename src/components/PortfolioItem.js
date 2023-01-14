import React from 'react';
import './PortfolioItem.css';
import LinkText from './LinkText';

function PortfolioItem(props) {
    const links = props.links.map((link) => {
        return (
            <LinkText icon={link.icon} text={link.text} href={link.href}></LinkText>
        );
    });

    return (
        <div className="portfolioItem dropShadow">
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

export default PortfolioItem;