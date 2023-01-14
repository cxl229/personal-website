import React from 'react';
import Project from './Project';
import itemArr from '../portfolioProjects';

function Projects() {
    const projs = itemArr.map((item) => {
        return (
            <Project
                image={item.image}
                projectName={item.projectName}
                subtitle={item.subtitle}
                techStack={item.techStack}
                description={item.description}
                links={item.links}
            ></Project>
        );
    });

    return (
        <>
        <h2>Project</h2>
        <div>{projs}</div>
        </>
    );
}

export default Projects;