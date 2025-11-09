import { NextResponse } from "next/server";

const projectData = {
  "projects": [
    {
      "title": "Factory Assembly Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL"],
      "description": "Built a factory simulation using object-oriented design and dynamic memory management in C++. (Owing to the Intellectual Property Policy of Seneca College, code sample is available upon request.)",
      "keyFeatures": [
        "Managed order routing, status checks, and station coordination with algorithmic logic.",
        "Ensured safe memory handling with deep copies and move semantics.",
        "Simulated factory flow using STL containers like deque and vector.",
        "Developed modular, maintainable, and reusable code following industry best practices."
      ],
      "imageUrl": ""
    },
    {
      "title": "Project Management System",
      "technologies": [
        "JavaScript", "HTML", "PostgreSQL", "Tailwind CSS",
        "Node.js", "Express.js", "Sequelize", "EJS"
      ],
      "description": "Developed a web-based project management system using Node.js, Express.js, PostgreSQL (Sequelize ORM), and EJS.",
      "keyFeatures": [
        "Implemented CRUD operations for projects and sectors with sector-based filtering and relational data handling.",
        "Secured database connections using environment variables and SSL configurations.",
        "Designed a responsive and user-friendly interface with Tailwind CSS."
      ],
      "imageUrl": ""
    },
    {
      "title": "Customer Ordering System",
      "technologies": ["C++", "SQL", "Oracle OCCI"],
      "description": "Developed a C++ application that connects to an Oracle database using OCCI.",
      "keyFeatures": [
        "Used stored procedures and functions for validating customers, retrieving product prices, and processing orders.",
        "Designed and implemented features for login, adding items to cart, displaying order summaries, and checkout.",
        "Ensured accurate data handling and user input validation throughout the ordering flow."
      ],
      "imageUrl": ""
    }
  ]
};

export async function GET() {
    return NextResponse.json(projectData);
}