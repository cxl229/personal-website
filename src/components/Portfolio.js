import React from 'react';
import PortfolioItem from './PortfolioItem';
import itemArr from '../portfolioProjects';

function Portfolio() {
    const portfolioItems = itemArr.map((item) => {
        return (
            <PortfolioItem
                image={item.image}
                projectName={item.projectName}
                subtitle={item.subtitle}
                techStack={item.techStack}
                description={item.description}
                links={item.links}
            ></PortfolioItem>
        );
    });

    return (
        <>
        <h2>Portfolio</h2>
        <div>{portfolioItems}</div>
        </>
    );
}

export default Portfolio;