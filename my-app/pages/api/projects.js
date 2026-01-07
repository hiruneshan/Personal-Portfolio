// pages/api/projects.js

// This is your data from the screenshot
const projectData = {
  "projects": [
    {
      "title": "Factory Production Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL", "Data Structures", "Dynamic Memory Management"],
      "description": "Developed a full production-line simulation using modern C++ and Object-Oriented Programming principles. The system models real factory behavior by moving customer orders through multiple workstations, each responsible for processing a specific item. Implemented dynamic memory management, custom data structures, and class interactions (aggregation/association) to manage orders efficiently. The simulation tracks pending, completed, and incomplete orders while ensuring proper workflow control across the assembly line.",
      "imageUrl": "/images/image.png"
    },
    {
      "title": "Olympic Data ETL Pipeline",
      "technologies": ["Python", "Python Core Data Structures", "CSV File Parsing & Generation", "File I/O Systems", "Algorithmic Data Aggregation"],
      "description": "Processed large Olympic open datasets by identifying missing, inconsistent, and incorrect data. Designed a Python-based workflow to clean and standardize records, integrate Paris 2024 data without duplicates, and generate new cleaned CSV files along with a summarized medal tally for analysis.",
      "imageUrl": "/images/ETL image.png",
      "GitHub": "https://github.com/hiruneshan/end-to-end-data-pipeline-design"
    },
    {
      "title": "AuthFlow",
      "technologies": ["React", "Node.js", "Express.js", "Passport.js", "JWT", "Vercel", "MongoDB"],
      "description": "A full-stack user authentication system with secure JWT-based authorization. The project supports user registration and login, token-based session handling, and protected API routes for managing user favourites. Authentication is handled using Passport.js with a JWT strategy, and the frontend securely stores and decodes tokens to manage authenticated UI state. The backend is deployed on Vercel and uses environment variables for secure configuration.",
      "imageUrl": "/images/AuthFlow.png",
      "GitHub": "https://github.com/hiruneshan/WEB---APP"
    },
    {
      "title": "Media Management System",
      "technologies": ["C++", "STL Containers & Algorithms", "Formatting & I/O", "Dynamic Memory Management"],
      "description": "I developed a Media Management System in C++ that loads, stores, and displays Books and TV Shows using object-oriented programming principles. The system supports formatted output, dynamic collections, spell checking, file parsing, and custom display settings. It also includes sorting, lookup, and observer notifications for new items added to a collection.",
      "imageUrl": "/images/DBS_C++_sol.png"
    }
  ]
};

// This is the Pages Router API handler
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projectData);
  } else {
    // Handle other methods or return an error
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}