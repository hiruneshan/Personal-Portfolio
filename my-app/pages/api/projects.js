const projectData = {
  "projects": [
    {
      "title": "Factory Production Line Simulation",
      "technologies": ["C++", "Object-Oriented Programming", "STL", "Data Structures", "Dynamic Memory Management"],
      "description": "Developed a full <span style=\"color: #64ffda\">production-line simulation</span> using <span style=\"color: #64ffda\">modern C++</span> and <span style=\"color: #64ffda\">Object-Oriented Programming</span> principles. The system models real factory behavior by moving customer orders through multiple <span style=\"color: #64ffda\">workstations</span>, each responsible for processing a specific item. Implemented <span style=\"color: #64ffda\">dynamic memory management</span>, custom data structures, and class interactions (<span style=\"color: #64ffda\">aggregation/association</span>) to manage orders efficiently.",
      "imageUrl": "/images/image.png"
    },
    {
      "title": "DriveNet CNN",
      "technologies": ["Python", "TensorFlow", "Keras", "OpenCV", "NVIDIA Architecture", "Unity Simulator"],
      "description": "<span style=\"color: #64ffda\">An autonomous vehicle control system</span> based on a <span style=\"color: #64ffda\">Convolutional Neural Network (CNN)</span>. Inspired by the NVIDIA end-to-end learning model, the system processes real-time camera feeds using <span style=\"color: #64ffda\">YUV color space transformation</span> and image augmentation. The model predicts steering angles with high precision by training on a balanced dataset of over 10,000 frames. Features include <span style=\"color: #64ffda\">autonomous lane centering</span> and recovery logic, tested within a high-fidelity Udacity/Unity simulation environment.",
      "imageUrl": "/images/SelfDrivingCar.png",
      "GitHub": "https://github.com/hiruneshan/Self-Driving-Car-Simulation",
      "Link": "#"
    },
    {
      "title": "Fragments Microservice",
      "technologies": ["Node.js", "Express", "Docker", "AWS", "DynamoDB", "S3", "Sharp", "Jest"],
      "description": "A cloud-native <span style=\"color: #64ffda\">RESTful microservice</span> for storing and retrieving text and image fragments. Built with <span style=\"color: #64ffda\">Node.js and Express</span>, containerized with <span style=\"color: #64ffda\">Docker</span>, and deployed on AWS using <span style=\"color: #64ffda\">DynamoDB and S3</span> for storage. Supports <span style=\"color: #64ffda\">image conversion</span> between formats (PNG, JPEG, WebP) and markdown-to-HTML rendering with full unit and integration test coverage.",
      "imageUrl": "/images/fragments.png"
    },
    {
      "title": "Olympic Data ETL Pipeline",
      "technologies": ["Python", "Python Core Data Structures", "CSV File Parsing & Generation", "File I/O Systems", "Algorithmic Data Aggregation"],
      "description": "Processed <span style=\"color: #64ffda\">large Olympic open datasets</span> by identifying missing, inconsistent, and incorrect data. Designed a <span style=\"color: #64ffda\">Python-based workflow</span> to clean and standardize records, integrate Paris 2024 data without duplicates, and generate new cleaned CSV files along with a summarized medal tally for analysis.",
      "imageUrl": "/images/ETLImage.png",
      "GitHub": "https://github.com/hiruneshan/end-to-end-data-pipeline-design"
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