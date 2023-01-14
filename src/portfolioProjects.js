import gachaCats from './img/gachacats.PNG';
import githubIcon from './img/github.png';
import linkIcon from './img/chainlink.png';

// Portfolio images should be 375 x 375 px, descriptions should be 4 lines long

const itemArr = [
    {
        image: gachaCats,
        projectName: "Gacha Cats!",
        subtitle: "november 2022, web project",
        techStack: "javascript, html, css, node.js, bootstrap, mongodb",
        description:
            "Roll! Battle! Collect awesome cats! 'Gacha Cats' was my final project for the Applied Internet Technology course at NYU, and my first ever complete web project. " +
            "I learned a lot about full-stack development, including database interactions with Mongoose, creating an API with Express and accessing it with Fetch, and and customizing the frontend with Sass. " +
            "All art and design is my own.",
        links: [
            {icon: githubIcon, text: "github.com/cxl229/gacha-cats", href: "https://github.com/cxl229/gacha-cats"},
            {icon: linkIcon, text: "gacha-cats.onrender.com", href: "https://gacha-cats.onrender.com"}
        ]
    },
    {
        image: gachaCats,
        projectName: "Personal Website",
        subtitle: "january 2023, web project",
        techStack: "react.js, javascript, html, css",
        description:
            "I challenged myself to create this website using the React framework. After designing the wireframe, I put the code together from scratch over the course of a week during my winter break. " +
            "I aimed to have this site reflect my personality, as well as serve as a live showcase of my programming and design knowledge.",
        links: [
            {icon: githubIcon, text: "github.com/cxl229/personal-website", href: "https://github.com/cxl229/personal-website"},
            {icon: linkIcon, text: "URL GOES HERE", href: ""}
        ]
    }
];

export default itemArr;