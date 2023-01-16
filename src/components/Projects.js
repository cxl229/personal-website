import React from 'react';
import Project from './Project';
import itemArr from '../portfolioProjects';
import { motion } from 'framer-motion';

function Projects() {
    // Partition projects by featured or not, so we can display featured projects at the top of the page (like pinned items), and other projects below
    // Convert objects into Project components within these arrays
    let otherProjects = [];
    let featuredProjects = [];
    itemArr.forEach((item, index) => {
        if (item.featured) {
            featuredProjects.push(
                <Project
                    image={item.image}
                    projectName={item.projectName}
                    featured={item.featured}
                    subtitle={item.subtitle}
                    techStack={item.techStack}
                    description={item.description}
                    links={item.links}
                    key={index}
                />
            );
        } else {
            otherProjects.push(
                <Project
                    image={item.image}
                    projectName={item.projectName}
                    featured={item.featured}
                    subtitle={item.subtitle}
                    techStack={item.techStack}
                    description={item.description}
                    links={item.links}
                    key={index}
                />
            );
            return;
        }
    });

    return (
        <motion.div
            initial={{x: "50%"}}
            animate={{x: 0}}
            exit={{x: window.innerWidth}}
            transition={{type: "spring", bounce: 0.3, duration: 0.2}}
        >
            <h2>Projects</h2>
            <div>{featuredProjects}</div>
            <div>{otherProjects}</div>
        </motion.div>
    );
}

export default Projects;