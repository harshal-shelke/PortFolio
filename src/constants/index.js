import az from '../assets/projects/az.png'
import chatwave from "../assets/projects/chatwave.jpeg"
import pathway from "../assets/projects/pathway.png"
import share from "../assets/projects/share.png"
import quick from "../assets/projects/quick.png"
import live from '../assets/projects/liv.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Full Stack Developer currently pursuing a Bachelor's in Computer Engineering. Prior to this, I completed a Diploma in Computer Technology. I am proficient in a wide array of technologies, including Java, JavaScript, Node.js, React, and C++, as well as databases like MySQL and MongoDB. I am also well-versed in working with Linux environments and have hands-on experience with version control using Git and containerization with Docker.
Additionally, I have developed a strong foundation in cloud technologies, particularly AWS, which complements my skill set in building scalable and efficient web applications. Throughout my career, I have built various projects using these technologies and continue to seek opportunities to learn and adopt new tech.`;


export const PROJECTS = [
  {
    title: "ChatWave",
    image: chatwave, // Replace with actual image path
    description:
      "A stateless chat app that allows users to connect with random users online.",
    technologies: ["React", "MongoDB", "Redis", "Socket.io", "Firebase", "Node"],
    link: "https://github.com/harshal-shelke/Chat-Wave" // Replace with your project link
  },
  {
    title: "liveCare",
    image: live, // Replace with actual image path
    description:
      "A real-time location tracking web app where users can share and track live GPS coordinates on an interactive map.",
    technologies: ["Node.js", "Express", "Socket.io", "Leaflet.js", "JavaScript", "HTML", "CSS"],
    link: "https://livecare.onrender.com/" // Replace with your project link
  },
  {
    title: "ShareScribe",
    image: share, // Replace with actual image path
    description:
      "A thought-posting platform supporting user registration, login, and secure scribes management with JWT authentication and password hashing using bcrypt.",
    technologies: ["Node.js", "MongoDB", "Express", "EJS", "JWT", "bcrypt", "Cloudinary"],
    link: "https://github.com/harshal-shelke/ShareScribe" // Replace with your project link
  },
  {
    title: "AZ News",
    image: az, // Replace with actual image path
    description:
      "A news website integrating the News API for fetching real-time articles and displaying them in a card-based layout.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "BootStrap"],
    link: "https://github.com/harshal-shelke/NewsApp" // Replace with your project link
  },
  {
    title: "QuickQuery",
    image: quick,
    description:
      "A web app leveraging the Gemini API to interact with users and provide accurate responses to their queries. Designed with a modern UI using Tailwind CSS, React, and JavaScript, achieving high performance and swift response times.",
    technologies: ["Gemini API", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    link: "https://master.d2bh45hji23kl7.amplifyapp.com/",
  },
  {
    title: "PathWays",
    image: pathway, // Replace with actual image path
    description:
      "An inclusive platform connecting prospective students with mentors from their target universities.",
    technologies: ["JavaScript", "ReactJs", "Material UI", "NodeJS", "MongoDB"],
    link: "https://github.com/harshal-shelke/pathWays" // Replace with your project link
  },
 
];
