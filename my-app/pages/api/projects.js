const projectData = {
  "projects": [
    {
      "rank": 1,
      "title": "Fragments Microservice",
      "technologies": ["Node.js", "Express", "Docker", "AWS", "DynamoDB", "S3", "Sharp", "Jest"],
      "description": "A cloud-native <span style=\"color: #64ffda\">RESTful microservice</span> for storing and retrieving text and image fragments. Built with <span style=\"color: #64ffda\">Node.js and Express</span>, containerized with <span style=\"color: #64ffda\">Docker</span>, and deployed on AWS using <span style=\"color: #64ffda\">DynamoDB and S3</span> for storage. Supports <span style=\"color: #64ffda\">image conversion</span> between formats (PNG, JPEG, WebP) and markdown-to-HTML rendering with full unit and integration test coverage.",
      "imageUrl": "/images/fragments.png"
    },
    {
      "rank": 2,
      "title": "DriveNet CNN",
      "technologies": ["Python", "TensorFlow", "Keras", "OpenCV", "NVIDIA Architecture", "Unity Simulator"],
      "description": "<span style=\"color: #64ffda\">An autonomous vehicle control system</span> based on a <span style=\"color: #64ffda\">Convolutional Neural Network (CNN)</span>. Inspired by the NVIDIA end-to-end learning model, the system processes real-time camera feeds using <span style=\"color: #64ffda\">YUV color space transformation</span> and image augmentation. The model predicts steering angles with high precision by training on a balanced dataset of over 10,000 frames. Features include <span style=\"color: #64ffda\">autonomous lane centering</span> and recovery logic.",
      "imageUrl": "/images/SelfDrivingCar.png"
    },
    {
      "rank": 3,
      "title": "Hotel Reservation & Management System",
      "technologies": ["Java", "JavaFX", "Hibernate/JPA", "SQL", "BCrypt", "SceneBuilder", "JUnit"],
      "description": "A comprehensive <span style=\"color: #64ffda\">3-tier desktop application</span> designed to replace manual hotel operations with a high-fidelity digital solution. Built using a <span style=\"color: #64ffda\">JavaFX presentation layer</span>, a robust <span style=\"color: #64ffda\">Service-oriented business tier</span>, and an <span style=\"color: #64ffda\">ORM-backed data tier</span>. Features a self-service Kiosk for seamless guest bookings and an Admin Dashboard for role-based management. Implemented advanced <span style=\"color: #64ffda\">Design Patterns</span> (Strategy, Observer, Factory, Decorator) to handle dynamic pricing, room generation, and automated waitlist notifications. Includes secure <span style=\"color: #64ffda\">BCrypt authentication</span>, multi-format reporting (CSV/PDF), and a multithreaded server architecture to support simultaneous administrative sessions.",
      "imageUrl": "/images/hotel-system.png"
    },
    {
      "rank": 4,
      "title": "Olympic Data ETL Pipeline",
      "technologies": ["Python", "Python Core Data Structures", "CSV File Parsing & Generation", "File I/O Systems", "Algorithmic Data Aggregation"],
      "description": "Processed <span style=\"color: #64ffda\">large Olympic open datasets</span> by identifying missing, inconsistent, and incorrect data. Designed a <span style=\"color: #64ffda\">Python-based workflow</span> to clean and standardize records, integrate Paris 2024 data without duplicates, and generate new cleaned CSV files along with a summarized medal tally for analysis.",
      "imageUrl": "/images/ETLImage.png",
      "githubUrl": "https://github.com/hiruneshan/end-to-end-data-pipeline-design"
    },
    {
      "rank": 5,
      "title": "Factory Production Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL", "Data Structures", "Dynamic Memory Management"],
      "description": "Developed a full <span style=\"color: #64ffda\">production-line simulation</span> using <span style=\"color: #64ffda\">modern C++</span> and <span style=\"color: #64ffda\">Object-Oriented Programming</span> principles. The system models real factory behavior by moving customer orders through multiple <span style=\"color: #64ffda\">workstations</span>, each responsible for processing a specific item. Implemented <span style=\"color: #64ffda\">dynamic memory management</span>, custom data structures, and class interactions (<span style=\"color: #64ffda\">aggregation/association</span>) to manage orders.",
      "imageUrl": "/images/image.png"
    },
    {
      "rank": 6,
      "title": "project management platform",
      "description": "A secure project management web app that allows users to browse, add, edit, and manage projects by sector with user authentication and session-based access control.",
      "technologies": ["JavaScript", "Tailwind CSS", "Node.js", "Express.js", "EJS", "MongoDB"],
      "githubUrl": "https://github.com/hiruneshan/Climate-Solutions-project"
    },
    {
      "rank": 7,
      "title": "Dictionary System",
      "description": "a C++ dictionary system that loads word data from files, supports configurable searches, and logs execution events.",
      "technologies": ["C++", "STL", "Object-Oriented Programming", "Dynamic Memory Management"],
      "githubUrl": "https://github.com"
    },
    {
      "rank": 8,
      "title": "Hero & Guild System",
      "description": "Engineered a template-based character system that adapts to different health types (Numeric, Super, Infinite) and implemented strict resource management for \"Guilds\" and \"Teams\" using deep-cloning and manual memory control.",
      "technologies": ["C++", "Dynamic Memory", "Templates", "STL", "OOP"],
      "githubUrl": "https://github.com"
    },
    {
      "rank": 9,
      "title": "Delivery System",
      "description": "Integrated the A* routing algorithm to determine optimal delivery paths. Engineered logic to manage physical constraints (weight and volume) for truck assignments, ensuring efficient resource allocation while maintaining code integrity through version control.",
      "technologies": ["C", "A* Search Algorithm", "Git", "Unit Testing"],
      "githubUrl": "https://github.com"
    },
    {
      "rank": 10,
      "title": "Database Design",
      "description": "Designed a normalized database with a complete data dictionary and schema scripts, and developed custom SQL views for inventory and revenue insights to support data-driven decision-making.",
      "technologies": ["SQL/Oracle", "C++", "ERD", "OCI", "PL/SQL"],
      "githubUrl": "https://github.com"
    },
    {
      "rank": 11,
      "title": "Music App",
      "description": "Built a dynamic UI using DOM manipulation for artist menus and song cards. Implemented custom data filtering and client-side validation to ensure a seamless search and user experience.",
      "technologies": ["JavaScript", "HTML", "CSS3"],
      "githubUrl": "https://github.com"
    },
    {
      "rank": 12,
      "title": "AuthFlow",
      "description": "<span style=\"color: #64ffda\">A full-stack user authentication system</span> with secure <span style=\"color: #64ffda\">JWT-based authorization</span>. The project supports user registration and login, token-based session handling, and <span style=\"color: #64ffda\">protected API routes</span> for managing user favourites. Authentication is handled using <span style=\"color: #64ffda\">Passport.js</span> with a JWT strategy, and the frontend securely stores and decodes tokens to manage authenticated UI state. The backend is deployed on Vercel.",
      "technologies": ["React", "Node.js", "Express.js", "Passport.js", "JWT", "Vercel", "MongoDB"],
      "githubUrl": "https://github.com/hiruneshan/WEB---APP",
      "externalUrl": "https://web-app-p792.vercel.app/login"
    },
    {
      "rank": 13,
      "title": "Media Management System",
      "description": "A Media Management System in <span style=\"color: #64ffda\">C++</span> that loads, stores, and displays Books and TV Shows using <span style=\"color: #64ffda\">object-oriented programming principles</span>. The system supports formatted output, dynamic collections, spell checking, file parsing, and custom display settings. It also includes <span style=\"color: #64ffda\">sorting, lookup,</span> and observer notifications for new items <span style=\"color: #64ffda\">added to a collection.</span>",
      "technologies": ["C++", "STL Containers & Algorithms", "Formatting & I/O", "Dynamic Memory Management"],
      "githubUrl": "https://github.com"
    }
  ]
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projectData);
  } else {
    // Handle other methods or return an error
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
