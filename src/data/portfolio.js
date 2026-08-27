export const profile = {
  name: "Janhavi Patil",
  role: "Full-Stack Developer | AI & Cloud Enthusiast",
  tagline:
    "I build fast, scalable products at the intersection of the web and AI — from pixel to pipeline.",
  location: "Shirpur, India",
  email: "janhavipatil7305@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1fHF6-pHRb1tgQpM2k8jIzxjtwbMMLWhw/view?usp=drive_link",
  socials: {
    github: "https://github.com/patilj735",
    linkedin: "https://linkedin.com/in/janhavi-patil-1348a22bb",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  summary:
    "I'm a full-stack engineer who ships product, not just code. My day-to-day lives in the MERN stack and AWS, but the throughline across everything I build is the same: take an ambiguous problem, integrate AI where it earns its place, and ship something scalable that people actually want to use. I care as much about the query plan as I do about the pixel.",
  focus: [
    "Designing and shipping full-stack products on the MERN stack",
    "Integrating AWS services into real product workflows",
    "Architecting cloud infrastructure on AWS for scale and cost",
    "Turning ambiguous problems into shipped, maintainable systems",
  ],
  timeline: [
    {
      year: "2023",
      title: "Started Computer Science",
      description:
        "Began a CS degree, fell in love with systems and product engineering in the same semester.",
    },
    {
      year: "2024",
      title: "First production deploys",
      description:
        "Shipped early MERN projects, started contributing to open source on weekends.",
    },
    {
      year: "2024",
      title: "Joined Akatsuki Coding Club",
      description:
        "Started leading full-stack builds and mentoring for the club's flagship projects.",
    },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "WebSockets"],
  },
  {
    category: "Cloud",
    items: [
      "AWS EC2 / S3 / Lambda",
      "Docker",
      "CI/CD",
      "Vercel",
      "GitHub Actions",
      "Render",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    category: "Programming",
    items: ["JavaScript (ES6+)", "Java", "Python", "SQL", "Git"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Akatsuki Coding Club",
    period: "2024 — Present",
    type: "Club Membership",
    summary:
      "Leading full-stack development of the club's flagship member projects, mentoring newer members on production practices.",
    achievements: [
      "Architected and shipped 2 full-stack applications from concept to deployment",
      "Mentored 10+ junior members on React, REST API design, and Git workflows",
    ],
    tech: ["React", "MongoDB", "Express", "Tailwind CSS", "Vercel"],
  },
];

export const projectFilters = ["All", "Full Stack", "AI", "Cloud"];

export const projects = [
  {
    id: "zerodha-clone",
    name: "Zerodha Clone",
    tagline: "MERN-based stock trading platform",
    description:
      "A full-stack stock trading platform inspired by Zerodha that allows users to manage watchlists, place buy and sell orders, and track holdings through a responsive trading dashboard.",
    categories: ["Full Stack"],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/patilj735/Zerodha-clone",
    demo: "https://zerodha-frontend-b541.onrender.com",
    image: "/projects/zerodha.png",
    metrics: [
      { label: "Dashboard modules", value: "5+" },
      { label: "Core trading features", value: "Watchlist, Orders, Holdings" },
    ],
    architecture:
      "Built with a React frontend and a Node.js/Express backend using REST APIs for user authentication, order management, watchlists, and portfolio data stored in MongoDB.",
    features: [
      "User authentication and account management",
      "Interactive watchlist with stock tracking",
      "Buy and sell order placement",
      "Holdings and portfolio management",
    ],
    challenges:
      "Designing a responsive trading dashboard and maintaining consistent portfolio and order state across multiple user interactions using the MERN stack.",
  },
  {
    id: "meetmatrix",
    name: "MeetMatrix",
    tagline: "AI-summarized video meeting platform",
    description:
      "A video conferencing app that auto-generates meeting summaries, action items, and searchable transcripts after every call.",
    categories: ["Full Stack"],
    tech: ["React", "WebRTC", "Node.js", "OpenAI API"],
    github:
      "https://github.com/patilj735/MeetMatrix-Modern_Video_Meeting_Platform",
    demo: "https://meetmatrix-frontend.onrender.com",
    image: "/projects/meetmatrix.png",
    metrics: [
      { label: "Summary generation time", value: "<20s" },
      { label: "Concurrent call capacity", value: "50 rooms" },
    ],
    architecture:
      "WebRTC handles peer video/audio directly between clients via a signaling server on Node.js. Recordings are uploaded to S3 post-call and processed asynchronously through an LLM summarization pipeline.",
    features: [
      "Peer-to-peer video calls with screen share",
      "Automatic post-call summaries and action items",
      "Real-time audio and video communication",
      "Responsive interface for desktop and mobile",
    ],
    challenges:
      "Implementing reliable WebRTC signaling and managing peer connections while maintaining a smooth real-time communication experience across multiple participants.",
  },
  {
    id: "voicenest",
    name: "VoiceNest",
    tagline: "Voice-first home rental platform for senior citizens",
    description:
      "VoiceNest is an AI-powered voice-first home rental platform for senior citizens that enables property search through natural speech in Marathi, Hindi, and English. It extracts housing preferences, conducts a conversational requirement-gathering process, and recommends homes based on structured voice inputs.",
    categories: ["Full Stack", "AI", "Cloud"],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "AWS Polly",
      "Web Speech API",
      "Google Gemini API",
      "Lambda",
      "DynamoDB",
      "Local Storage / Session Storage",
    ],
    github: "https://github.com/patilj735/voicenest",
    // demo: "https://voicenest.vercel.app",
    image: "/projects/voicenest.png",
    metrics: [{ label: "Voice-based search flow", value: "Conversational AI" }],

    architecture:
      "Voice input is captured through the Web Speech API, processed by the Gemini conversational assistant for multilingual requirement extraction, converted to speech using Amazon Polly, and matched against property listings through a structured preference engine.",

    features: [
      "Voice-based home search",
      "AI-powered requirement extraction",
      "Senior-friendly voice interaction",
    ],

    challenges:
      "Building a voice assistant that accurately extracts housing requirements and delivers natural voice responses while maintaining a smooth conversational experience for senior citizens.",
  },
  {
    id: "cloudmart",

    name: "CloudMart",

    tagline: "Cloud-based coffee e-commerce platform",

    description:
      "A full-stack coffee e-commerce platform that enables customers to browse products, manage carts, and place orders, while providing an admin dashboard for product management, inventory tracking, and cloud-based image storage with Amazon S3.",

    categories: ["Full Stack", "Cloud"],

    tech: ["React", "Node.js", "Express.js", "AWS S3", "DynamoDB"],

    github: "https://github.com/patilj735/CloudMart",

    // demo: "https://your-demo-link.vercel.app",
    image: "/projects/cloudmart.png",

    metrics: [
      { label: "User roles supported", value: "2" },
      { label: "Cloud services integrated", value: "2" },
    ],

    architecture:
      "Built with a React frontend and a Node.js/Express backend using MongoDB for data storage. Product images are uploaded directly to Amazon S3, while REST APIs handle authentication, product management, cart operations, and order processing.",

    features: [
      "Browse and search coffee products",
      "Shopping cart and order management",
      "Admin dashboard with inventory control",
      "Direct image uploads to Amazon S3",
    ],

    challenges:
      "Integrating Amazon S3 for secure image uploads, managing role-based access for customers and administrators, and maintaining consistent product and inventory data across the platform.",
  },

  {
    id: "lostlink",

    name: "LostLink",

    tagline: "AWS serverless lost-and-found platform",

    description:
      "An AI-powered lost-and-found platform that allows users to report lost or found items, upload images, and automatically match items using AWS serverless services and image recognition.",

    categories: ["Full Stack", "Cloud", "AI"],

    tech: [
      "React",
      "Node.js",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "DynamoDB",
      "Amazon Rekognition",
    ],

    github: "https://github.com/patilj735/LostLink-Smart_Lost_and_Found_Portal",

    image: "/projects/lostlink.png",

    metrics: [
      { label: "AWS services integrated", value: "6+" },
      { label: "Serverless API endpoints", value: "8+" },
    ],

    architecture:
      "Built with a React frontend and an AWS serverless backend where API Gateway routes requests to Lambda functions, S3 stores uploaded images, DynamoDB manages item records, and Amazon Rekognition analyzes images for item matching.",

    features: [
      "Report lost and found items",
      "Image upload with cloud storage",
      "AI-powered image recognition and matching",
      "Serverless and scalable cloud architecture",
    ],

    challenges:
      "Designing an event-driven serverless workflow that efficiently processes uploaded images, extracts visual information, and matches items while keeping the application scalable and cost-efficient.",
  },

  {
    id: "wanderlust",

    name: "Wanderlust",

    tagline: "Full-stack travel accommodation booking platform",

    description:
      "A full-stack travel accommodation platform where users can browse listings, view property details, create and manage listings, and securely book stays through a responsive web application.",

    categories: ["Full Stack"],

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
    ],

    github: "https://github.com/patilj735/WanderLust",

    demo: "https://wanderlust-rzpu.onrender.com/",

    image: "/projects/wanderlust.png",

    metrics: [
      { label: "Page load time", value: "<2s" },
      { label: "Image upload time", value: "<3s" },
    ],

    architecture:
      "Built with an Express.js backend and MongoDB database, following the MVC architecture. Cloudinary manages property image storage, while server-side rendering with EJS delivers dynamic listing and booking pages.",

    features: [
      "Browse and search accommodation listings",
      "Create, edit, and delete property listings",
      "Image upload and cloud storage integration",
      "User authentication and authorization",
    ],

    challenges:
      "Implementing secure authentication, image upload management, and efficient CRUD operations while maintaining a scalable MVC architecture and responsive user experience.",
  },
  {
    id: "bookmyshow-gui",

    name: "Book My Show GUI",

    tagline: "Java Swing movie ticket booking application",

    description:
      "A desktop-based movie ticket booking application built with Java Swing that allows users to browse movies, select show timings, choose seats, and complete the booking process through an interactive graphical interface.",

    categories: ["Desktop Application"],

    tech: ["Java", "Swing", "JDBC", "MySQL", "NetBeans"],

    github: "https://github.com/patilj735/Book-My-Show",

    demo: "https://drive.google.com/file/d/1o8wgqdJgwa2i0z4esVpNN55p4TIgeK59/view?usp=drive_link",

    image: "/projects/bms.png",

    metrics: [
      { label: "Booking workflow steps", value: "4" },
      { label: "GUI screens implemented", value: "6+" },
    ],

    architecture:
      "Built using Java Swing with a modular object-oriented architecture where JFrame and JPanel components manage the user interface, JDBC handles database connectivity, and MySQL stores movie, seat, and booking information.",

    features: [
      "Browse movie listings",
      "Select show timings",
      "Interactive seat selection",
      "Movie ticket booking and confirmation",
    ],

    challenges:
      "Managing seat availability, booking validation, and smooth navigation between multiple Swing screens while maintaining consistent database updates through JDBC.",
  },
  {
    id: "hospital-management-system",

    name: "Hospital Management System",

    tagline: "Java Swing hospital administration application",

    description:
      "A desktop-based hospital management system built with Java Swing and MySQL that streamlines patient registration, doctor management, appointment scheduling, and billing through an intuitive graphical interface.",

    categories: ["Desktop Application"],

    tech: ["Java", "Swing", "JDBC", "MySQL", "NetBeans"],

    github: "https://github.com/yourusername/hospital-management-system",

    demo: "https://drive.google.com/file/d/1dP1vnQ3vW5lX6goAc1tQ3Zk_LIZEDO_H/view?usp=drive_link",

    image: "/projects/hospmanage.png",

    metrics: [
      { label: "Patient search response time", value: "<200ms" },
      { label: "Appointment booking time", value: "<1s" },
    ],

    architecture:
      "Built using Java Swing with a modular object-oriented architecture where Swing components manage the user interface, JDBC handles database connectivity, and MySQL stores patient, doctor, appointment, and billing records.",

    features: [
      "Patient registration and record management",
      "Doctor management and scheduling",
      "Appointment booking and tracking",
      "Billing and payment management",
    ],

    challenges:
      "Managing relational data across multiple hospital modules while ensuring accurate appointment scheduling, patient record updates, and reliable database operations through JDBC.",
  },
];

export const certifications = [
  {
    name: "Postman API Fundamentals",
    issuer: "Postman",
    date: "2024",
    verifyUrl: "https://drive.google.com/file/d/1G8vES0coDh0Alp3UUGLraedjnAtx2m9S/view?usp=drive_link",
  },

  {
    name: "Java Programming Certification",
    issuer: "Nextech Infosystems",
    date: "2024",
    verifyUrl: "https://nextechinfosystems.com/verify/A2931465",
  },
  
  {
    name: "JLPT N5 Certification",
    issuer: "Japan Foundation",
    date: "2025",
    verifyUrl: "https://drive.google.com/file/d/1X2SHT7tI6uoP2ybQ2EpftiF-W2NHXwHH/view?usp=drive_link",
  },
];
