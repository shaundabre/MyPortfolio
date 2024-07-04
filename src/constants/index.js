import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated aspiring full stack developer enthusiastic about building reliable and scalable web applications. While I'm new to the field, I've been actively learning and gaining proficiency in front-end technologies such as React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My objective is to apply my knowledge to develop inventive solutions that contribute to business growth and provide users with outstanding experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic and versatile aspiring full stack developer with a strong passion for creating efficient and user-friendly web applications. Although I'm new to the professional scene, my journey in web development began with a deep curiosity about how things work. I have been actively learning and gaining familiarity with technologies such as React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to continuously learn and adapt to new challenges in the field of web development. I thrive in collaborative environments and find joy in solving complex problems to deliver high-quality solutions. Beyond coding, I stay active by exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Wander Nest",
    image: project1,
    description: "Web Development Project using MongoDB, Express, React, NodeJs. The application allows users to browse and book rental properties listed on the platform. Key features include viewing property details such as location, amenities, and pricing, as well as booking accommodations based on selected dates. The project uses React Router for navigation, custom CSS for styling, and RESTful APIs with MongoDB for backend services.",
    technologies: ["MongoDB", "Express", "React", "NodeJs"]
  }
  
  ,
  {
    title: "Crop Yield Prediction And Recommendation",
    image: project2,
    description: "Machine Learning Project using Python and Streamlit. Leveraging data analytics, weather data, and soil analysis, our system forecasts crop yields, empowering farmers with insights to make informed decisions. Tailored recommendations maximize productivity while minimizing risks, ensuring sustainable agricultural practices and higher yields.",
    technologies: ["Python", "Streamlit"]
  }
  ,
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "StockX",
    image: project4,
    description: "Machine Learning Project using Python and Streamlit. A stock market platform using machine learning, the model uses previous data to make predictions for stock prices.",
    technologies: ["Python", "Streamlit"]
  }
  ,
];

export const CONTACT = {
  address: "Mira Road(E) , Thane , Maharashra, Pin Code : 401107",
  phoneNo: "+91 7039684670 ",
  email: "enriquecrasto1@gmail.com",
};
