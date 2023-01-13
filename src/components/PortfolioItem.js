import React from 'react';
import LinkText from './LinkText';

function PortfolioItem(props) {
    const links = props.links.map((link) => {
        return (
            <LinkText icon={link.icon} text={link.text} href={link.href}></LinkText>
        );
    });

    return (
        <div>
            <img src={props.image} alt={props.projectName + " image"}/>
            <h1>{props.projectName}</h1>
            <h3>{props.subtitle}</h3>
            <h3>{props.techStack}</h3>
            <p>{props.description}</p>
            {links}
        </div>
    );
}

export default PortfolioItem;