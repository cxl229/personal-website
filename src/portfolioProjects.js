import gachaCats from './img/gachacats.PNG';
import personalWebsite from './img/website.PNG';
import catWent from './img/wherethecatwent.png';
import sliceOfLife from './img/sliceoflife.png';
import taskPet from './img/taskpet.jpg';
import calmCafe from './img/calmcafe.png';
import githubIcon from './img/github.png';
import linkIcon from './img/chainlink.png';
import devpostIcon from './img/devpost.png';
import driveIcon from './img/drive.png';

// Project images should be 350 x 350 px, descriptions should be 4 lines long

const itemArr = [
    {
        image: personalWebsite,
        projectName: "Personal Website",
        featured: false,
        subtitle: "january 2023, web project",
        techStack: "react.js, javascript, html, css",
        description:
            "I challenged myself to create this website using the React framework. After designing the wireframe, I put the code together from scratch over the course of a week during my winter break. " +
            "I aimed to have this site reflect my personality, as well as serve as a live showcase of my programming and design knowledge.",
        links: [
            {icon: githubIcon, text: "github.com/cxl229/personal-website", href: "https://github.com/cxl229/personal-website"},
            {icon: linkIcon, text: "", href: ""}
        ]
    },
    {
        image: catWent,
        projectName: "Where the Cat Went",
        featured: false,
        subtitle: "december 2022, web project",
        techStack: "javascript, html, css, photoshop, procreate",
        description:
            "A digital art piece about my cat that revolves around the beauty of everyday adventure. This website was my final project for the Digital Art 1 course at NYU. " +
            "It is a client-side-only web application that uses JavaScript DOM manipulations to deliver interactivity. The cat animation was created in Procreate, " +
            "and the backgrounds were created in Adobe Photoshop.",
        links: [
            {icon: githubIcon, text: "github.com/cxl229/wherethecatwent", href: "https://github.com/cxl229/wherethecatwent"},
            {icon: linkIcon, text: "troubled-pumps-colt.cyclic.app", href: "https://troubled-pumps-colt.cyclic.app/"}
        ]
    },
    {
        image: gachaCats,
        projectName: "Gacha Cats!",
        featured: true,
        subtitle: "november 2022, web game",
        techStack: "javascript, html, css, node.js, bootstrap, mongodb",
        description:
            "Roll! Battle! Collect awesome cats! 'Gacha Cats!' is my final project for the Applied Internet Technology course at NYU, and my first ever complete web project. " +
            "I learned a lot about full-stack development, including database interactions with Mongoose, creating an API with Express and accessing it with Fetch, and and customizing the frontend with Sass. " +
            "All art and design is my own.",
        links: [
            {icon: githubIcon, text: "github.com/cxl229/gacha-cats", href: "https://github.com/cxl229/gacha-cats"},
            {icon: linkIcon, text: "gacha-cats.onrender.com", href: "https://gacha-cats.onrender.com"}
        ]
    },
    {
        image: sliceOfLife,
        projectName: "Slice of Life",
        featured: false,
        subtitle: "february 2022, java application",
        techStack: "java",
        description:
            "Slice of Life is a time slice tracking desktop app, designed to inspire a healthier, more balanced lifestyle. I created this project for HackNYU 2022 within 24 hours. All code and art is by me. " +
            "It won the Disney 'Most Magical Hack' prize.",
        links: [
            {icon: githubIcon, text: "github.com/charlottexlin/slice-of-life", href: "https://github.com/charlottexlin/slice-of-life"},
            {icon: devpostIcon, text: "devpost.com/software/slice-of-life-xui45n", href: "https://devpost.com/software/slice-of-life-xui45n"}
        ]
    },
    {
        image: taskPet,
        projectName: "Task Pet",
        featured: false,
        subtitle: "february 2021, java application",
        techStack: "java",
        description:
            "Task Pet is a desktop assignment tracker app that motivates you to complete your tasks on time with a cute virtual pet. " +
            "It is a fun way for students to stay motivated and make finishing your homework into a game. I created this project for PearlHacks 2021 within 24 hours. " +
            "All code and art is by me. It won the nCino “Why So Serious Hack” prize.",
        links: [
            {icon: devpostIcon, text: "devpost.com/software/task-pet", href: "https://devpost.com/software/task-pet"},
            {icon: driveIcon, text: "drive.google.com/drive/folders/14pZxuFD_uB9-b12DSJ_5YY_sxDMStP9W", href: "https://drive.google.com/drive/folders/14pZxuFD_uB9-b12DSJ_5YY_sxDMStP9W"}
        ]
    },
    {
        image: calmCafe,
        projectName: "Calm Café",
        featured: false,
        subtitle: "february 2021, java application",
        techStack: "java",
        description:
            "Calm Café is a desktop app-based mental health solution. This project was created for Hack In Place 2.0 by a 3-person team, with me contributing the code. " +
            "Art and music was by my team members. The program provides a relaxing and aesthetically pleasing digital café space with several mental health resources for users. " +
            "It received the “Best in Category (Health)” prize.",
        links: [
            {icon: driveIcon, text: "drive.google.com/drive/folders/1Ztsvv1k4bv5jLxhqcArwUE6IBJuRUAmv", href: "https://drive.google.com/drive/folders/1Ztsvv1k4bv5jLxhqcArwUE6IBJuRUAmv?usp=sharing"}
        ]
    }
];

export default itemArr;