// pages/api/projects.js

// This is your data from the screenshot
const projectData = {
  "projects": [
    {
      "title": "Factory Assembly Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL"],
      "description": "A C++ simulation of a factory assembly line using OOP, STL containers, and safe memory management.",
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
      "imageUrl": "/images/image.png" // You can update this image path
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