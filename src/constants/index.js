export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Vatsal Acharya',
    position: 'Architect at Vatsal Acharya Architects',
    img: 'assets/review1.jpg',
    review:
      'Working with Jaimin was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web development projects.',
  },
  {
    id: 2,
    name: 'Ravi Acharya',
    position: 'Civil Engineer at Dhuvanshi Constuction',
    img: 'assets/review2.jpg',
    review:
      'Jaimin’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our constuction site, and our online reach have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Raval Krutarth',
    position: 'Web Developer',
    img: 'assets/review3.svg',
    review:
      'I can’t say enough good things about Jaimin. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
];

export const myProjects = [
  {
    title: 'World Atlas - Country Explorer',
    desc: 'World Atlas is a responsive React application that allows users to explore country data using a REST API. It supports search, filter, and detailed views for each country.',
    subdesc: 'Built with React.js, Axios, and React Router, this app provides a smooth UX with clean navigation and dynamic data fetching.',
    href: 'https://world-atlas-react-jaimin.netlify.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/worldatlas.svg',
    logoStyle: {
      backgroundColor: '#1A202C',
      border: '0.2px solid #2D3748',
      boxShadow: '0px 0px 60px 0px #4A55684D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Javascript', path: '/assets/js.svg' },
      { id: 3, name: 'REST API', path: '/assets/api.svg' },
    ],
  },
  {
    title: 'Pokemon Info - Pokédex App',
    desc: 'A searchable Pokédex app that fetches and displays detailed Pokémon data using a public API. Users can explore stats, types, and abilities.',
    subdesc: 'Built using React.js and REST APIs, the app delivers a fun and interactive experience styled with modern CSS.',
    href: 'https://jaimin-pokemon-project.netlify.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/pokemon.svg',
    logoStyle: {
      backgroundColor: '#1A202C',
      border: '0.2px solid #2D3748',
      boxShadow: '0px 0px 60px 0px #4A55684D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Javascript', path: '/assets/js.svg' },
      { id: 3, name: 'CSS', path: '/assets/css.svg' },
    ],
  },
  {
    title: 'Vatsal Acharya Architects',
    desc: 'A portfolio website built for an architectural firm to showcase its design projects. Includes animations and responsive layouts.',
    subdesc: 'Created with React.js, Styled Components, and Framer Motion for elegant transitions and visual storytelling.',
    href: 'https://vatsalacharyaarchitects.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#F0F0F0',
      border: '0.2px solid #2E2E30',
      boxShadow: '0px 0px 60px 0px #8888884D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Javascript', path: '/assets/js.svg' },
      { id: 3, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 6, 0] : isMobile ? [-10, -10, 0] : isTablet ? [-12, -10, 2] : [-20, 10, -2],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Notionmind',
    pos: 'React.js Developer',
    duration: 'Aug 2024 - Present',
    title: "Notionmind serves as my go-to tool for creating interactive prototypes with react.js. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/notionmind.svg',
    animation: 'victory',
  },

];