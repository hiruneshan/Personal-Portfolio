// pages/api/projects.js

// This is your data from the screenshot
const projectData = {
  "projects": [
    {
      "title": "Factory Assembly Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL", "Data Structures", "Dynamic Memory Management"],
      "description": "ADeveloped a full production-line simulation using modern C++ and Object-Oriented Programming principles. The system models real factory behavior by moving customer orders through multiple workstations, each responsible for processing a specific item. Implemented dynamic memory management, custom data structures, and class interactions (aggregation/association) to manage orders efficiently. The simulation tracks pending, completed, and incomplete orders while ensuring proper workflow control across the assembly line.",
      "imageUrl": "/images/image copy.png" 
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