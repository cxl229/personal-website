import React from 'react';
import Project from './Project';
import itemArr from '../portfolioProjects';
import { motion } from 'framer-motion';

function Projects() {
    const projs = itemArr.map((item, index) => {
        return (
            <Project
                image={item.image}
                projectName={item.projectName}
                subtitle={item.subtitle}
                techStack={item.techStack}
                description={item.description}
                links={item.links}
                key={index}
            ></Project>
        );
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Projects</h2>
            <div>{projs}</div>
        </motion.div>
    );
}

export default Projects;