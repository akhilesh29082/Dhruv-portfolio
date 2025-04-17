// Navigation links
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Skills data
export const developmentSkills = [
  {
    name: "Frontend Development",
    percentage: 90,
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Backend Development",
    percentage: 85,
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    name: "Programming Languages",
    percentage: 88,
    technologies: ["Python", "JavaScript", "Java", "C++"],
  },
];

export const dataSkills = [
  {
    name: "Data Analysis",
    percentage: 92,
    technologies: ["Pandas", "NumPy", "Data Visualization", "SQL"],
  },
  {
    name: "Machine Learning",
    percentage: 80,
    technologies: ["Scikit-learn", "TensorFlow", "Classification", "Regression"],
  },
  {
    name: "Big Data Processing",
    percentage: 75,
    technologies: ["Hadoop", "Spark", "Data Pipelines", "ETL"],
  },
];

// Tools data
export const tools = [
  { name: "Git & GitHub", icon: "developer_board" },
  { name: "AWS", icon: "cloud" },
  { name: "Docker", icon: "storage" },
  { name: "Jupyter", icon: "dashboard" },
  { name: "VS Code", icon: "view_quilt" },
  { name: "Tableau", icon: "auto_awesome" },
];

// Project data
export const projects = [
  {
    title: "Interactive Learning Platform",
    description: "A React-based application for interactive learning with real-time feedback and progress tracking.",
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    sourceLink: "#",
    color: "primary",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive visualization dashboard for large datasets with real-time filtering and analysis tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "D3.js", "Flask"],
    demoLink: "#",
    sourceLink: "#",
    color: "accent",
  },
  {
    title: "Predictive Analytics System",
    description: "Machine learning pipeline for predictive analytics on large datasets with interactive model evaluation.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["TensorFlow", "Pandas", "Scikit-learn"],
    demoLink: "#",
    sourceLink: "#",
    color: "secondary",
  },
];

// Experience data
export const experiences = [
  {
    title: "Software Development Intern",
    company: "Tech Innovators Inc.",
    period: "June 2023 - August 2023",
    description: "Developed and maintained web applications using React and Node.js, implementing responsive designs and RESTful APIs.",
    tags: ["React", "Node.js", "REST APIs"],
    icon: "business",
    side: "left",
    color: "primary",
  },
  {
    title: "Data Science Research Assistant",
    company: "University Research Lab",
    period: "January 2023 - May 2023",
    description: "Conducted research on machine learning models for time series analysis, processed large datasets, and created visualizations for research papers.",
    tags: ["Python", "ML Models", "Data Visualization"],
    icon: "auto_graph",
    side: "right",
    color: "accent",
  },
  {
    title: "Web Development Lead",
    company: "College Tech Club",
    period: "August 2022 - Present",
    description: "Leading a team of student developers to create web applications for college events and departments. Mentoring junior members in web technologies.",
    tags: ["Team Leadership", "Full Stack", "Mentoring"],
    icon: "code",
    side: "left",
    color: "secondary",
  },
  {
    title: "Hackathon Participant",
    company: "National Student Tech Competition",
    period: "October 2022",
    description: "Developed an AI-powered educational tool that won 2nd place. Created the frontend interface and integrated machine learning models.",
    tags: ["React", "Flask", "TensorFlow"],
    icon: "school",
    side: "right",
    color: "primary",
  }
];

// Social links
export const socialLinks = [
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Twitter", url: "#", icon: "twitter" },
  { name: "Instagram", url: "#", icon: "instagram" },
];

// Personal info
export const personalInfo = {
  name: "Dhruv Bompilwar",
  titles: [
    "Computer Engineering Student",
    "Data Science Enthusiast",
    "Web Developer",
    "Learning App Creator"
  ],
  email: "bompilwardhruv@gmail.com",
  phone: "+91 7776965101",
  location: "Pune, Maharashtra, India",
  description: "A passionate Computer Engineering student pursuing dual degrees from MITAOE and IIT Madras, specializing in web development and data science."
};

// Education data
export const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "MIT Academy of Engineering (MITAOE)",
    period: "2021 - Present",
    details: [
      "Core computer science curriculum with focus on system design and software engineering",
      "Advanced coursework in algorithms, data structures, and distributed systems",
      "Active member of the college programming and technology clubs"
    ],
    color: "primary"
  },
  {
    degree: "BS in Data Science and Applications",
    institution: "Indian Institute of Technology, Madras (IIT Madras)",
    period: "2022 - Present",
    details: [
      "Statistical methods, machine learning, and big data analytics",
      "Practical experience in analyzing large datasets and building data pipelines",
      "Developing predictive models and visualization techniques for data-driven insights"
    ],
    color: "accent"
  }
];
