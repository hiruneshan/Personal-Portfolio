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
      "title": "Project Management System",
      "technologies": ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Tailwind CSS"],
      "description": "A web-based project management system built with Node.js and PostgreSQL, featuring CRUD operations and a responsive Tailwind CSS interface.",
      "imageUrl": "/images/p2.jpg" 
    },
    {
      "title": "Customer System",
      "technologies": ["C++", "SQL", "Oracle", "OCCI"],
      "description": "A C++ application using OCCI to connect to an Oracle database, managing a customer order flow with stored procedures.",
      "imageUrl": "/images/DBS_C++_sol.png" 
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