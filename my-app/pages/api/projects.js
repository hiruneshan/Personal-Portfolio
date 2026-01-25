const projectData = {
  "projects": [
    {
      "title": "Factory Production Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL", "Data Structures", "Dynamic Memory Management"],
      "description": "Developed a full <span style=\"color: #64ffda\">production-line simulation</span> using <span style=\"color: #64ffda\">modern C++</span> and <span style=\"color: #64ffda\">Object-Oriented Programming</span> principles. The system models real factory behavior by moving customer orders through multiple <span style=\"color: #64ffda\">workstations</span>, each responsible for processing a specific item. Implemented <span style=\"color: #64ffda\">dynamic memory management</span>, custom data structures, and class interactions (<span style=\"color: #64ffda\">aggregation/association</span>) to manage orders efficiently.",
      "imageUrl": "/images/image.png"
    },
    {
      "title": "Olympic Data ETL Pipeline",
      "technologies": ["Python", "Python Core Data Structures", "CSV File Parsing & Generation", "File I/O Systems", "Algorithmic Data Aggregation"],
      "description": "Processed <span style=\"color: #64ffda\">large Olympic open datasets</span> by identifying missing, inconsistent, and incorrect data. Designed a <span style=\"color: #64ffda\">Python-based workflow</span> to clean and standardize records, integrate Paris 2024 data without duplicates, and generate new cleaned CSV files along with a summarized medal tally for analysis.",
      "imageUrl": "/images/ETLImage.png",
      "GitHub": "https://github.com/hiruneshan/end-to-end-data-pipeline-design"
    },
    {
      "title": "AuthFlow",
      "technologies": ["React", "Node.js", "Express.js", "Passport.js", "JWT", "Vercel", "MongoDB"],
      "description": "<span style=\"color: #64ffda\">A full-stack user authentication system</span> with secure <span style=\"color: #64ffda\">JWT-based authorization</span>. The project supports user registration and login, token-based session handling, and <span style=\"color: #64ffda\">protected API routes</span> for managing user favourites. Authentication is handled using <span style=\"color: #64ffda\">Passport.js</span> with a JWT strategy, and the frontend securely stores and decodes tokens to manage authenticated UI state. The backend is deployed on Vercel.",
      "imageUrl": "/images/AuthFlow.png",
      "GitHub": "https://github.com/hiruneshan/WEB---APP",
      "Link": "https://web-app-p792.vercel.app/login"
    },
    {
      "title": "Media Management System",
      "technologies": ["C++", "STL Containers & Algorithms", "Formatting & I/O", "Dynamic Memory Management"],
      "description": "A Media Management System in <span style=\"color: #64ffda\">C++</span> that loads, stores, and displays Books and TV Shows using <span style=\"color: #64ffda\">object-oriented programming principles</span>. The system supports formatted output, dynamic collections, spell checking, file parsing, and custom display settings. It also includes <span style=\"color: #64ffda\">sorting, lookup,</span> and observer notifications for new items <span style=\"color: #64ffda\">added to a collection.</span>",
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