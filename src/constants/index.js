import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  SIHLogo,
  carrent,
  jobit,
  tripguide,
  threejs,
  proj_1,
  proj_2,
  proj_3,
  proj_4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Ai/ML Explorer",
    icon: mobile,
  },
  {
    title: "Web Dev/Learner",
    icon: backend,
  },
  {
    title: "Art Passionate",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];



const experiences = [
  {
    title: "SIH Hackathon",
    company_name: "Smart India Hackathon",
    icon: SIHLogo,
    iconBg: "#383E56",
    date: "2023 & 2024",
    points: [
      " Participated in SIH Hackathon 2023, gaining valuable experience in problem-solving and teamwork.",
      "Achieved 56th rank in SIH Hackathon 2024 among a competitive field of participant(400 teams).",
      " Developed a Crop Disease Prediction AI web app using HTML, CSS, JavaScript for the frontend,CNN and TensorFlow for the model, and Figma for backend design.",
    ],
  }
  /*{
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }*/
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];







const projects = [
  {
    name: "3-D Portfolio",
    description:
      "A visually engaging 3D portfolio built with React and Three.js, featuring animated sections like About, Experience, Projects, Skills, and Contact Me.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_1,
    source_code_link: "https://github.com/Ajxxxs/Port-3-Folio",
  },
  {
    name: "Agro-Vision",
    description:
      "AgroVision: intelligent web application designed to help farmers and agricultural experts predict crop diseases using plant leaf images and recommend suitable crops based on environmental factors",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_2,
    source_code_link: "https://github.com/Ajxxxs/Agro-Vision",
  },
  {
    name: "Muscle-Matrix",
    description:
      "Muscle-Matrix offers personalized workout routines tailored to your muscle targets and strength goals, providing adaptive fitness solutions for your unique needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_3,
    source_code_link: "https://github.com/Ajxxxs/Muscle-Matrix",
  },
  {
    name: "Blog-101",
    description:
      "Blog-101 is a sleek platform for creating and managing content with ease, featuring a responsive and interactive interface for engaging blog experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj_4,
    source_code_link: "https://github.com/Ajxxxs",
  }
];

export { services, technologies, experiences, testimonials, projects };