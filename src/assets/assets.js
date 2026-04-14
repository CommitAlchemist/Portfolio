import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import profileImg from "../assets/profile.jpeg";
import profileImg1 from "../assets/profile1.jpeg";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.jpeg";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";

export const assets = {
  profileImg,
  profileImg1,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Java"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Eclipse"],
  },
];

export const projects = [
  {
    title: "Finance Dashboard [Backend]",
    description:
      "Built a Finance Dashboard Backend with secure JWT authentication, role-based access control, and efficient record management using Node.js and MongoDB. Implemented filtering, pagination, and analytics (income/expense trends) with a scalable Controller–Service architecture.",
    image: projectImg3,
    tech: ["Node.js", "Express.js", "MongoDB"],
    icons: [FaNodeJs, SiExpress, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "A scalable admin dashboard to manage products, orders, users, and analytics with real-time insights.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app that fetches real-time data and displays accurate forecasts based on user location.",
    image: projectImg2,
    tech: ["HTML", "CSS", "Javascript"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application using ZEGOCLOUD with seamless messaging and live communication features.",
    image: projectImg5,
    tech: ["React", "Node.js", "ZEGOCLOUD"],
    icons: [FaReact, FaNodeJs],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Software Development Intern",
    company: "Tap Academy",
    duration: "6 months",
    description:
      "Completed full-stack development training with hands-on experience in HTML, CSS, JavaScript, and React.js for frontend, along with Node.js, Express.js, and Java for backend development. Worked with MySQL for database management, integrated RESTful APIs, and followed best coding practices, version control, and deployment processes.",
    color: "purple",
  },
  {
    role: "Application Developer - Web & Mobile",
    company: "Rooman Technologies",
    duration: "6 Months",
    description:
      "Developed responsive and interactive web applications using HTML, CSS, JavaScript, and React.js. Gained foundational knowledge in Java and object-oriented programming while focusing on building user-friendly interfaces and improving web performance.",
    color: "pink",
  },
];
export const educationData = [
  {
    role: "Bachelor of Engineering (ECE)",
    company: "KS Institute of Technology",
    duration: "2021 - 2025",
    description:
      "Completed my degree in Electronics and Communication Engineering with a strong foundation in programming, problem solving, and core engineering concepts.",
    color: "purple",
  },
  {
    role: "Pre-University (PCMC)",
    company: "Mahesh PU College",
    duration: "2021",
    description:
      "Studied science stream with focus on Physics, Chemistry, Mathematics and Computer science, building analytical and logical thinking skills.",
    color: "pink",
  },
  {
    role: "High School",
    company: "Shreya's Public School",
    duration: "2019",
    description:
      "Completed secondary education with strong academic performance and developed early interest in technology and computers.",
    color: "purple",
  },
];
