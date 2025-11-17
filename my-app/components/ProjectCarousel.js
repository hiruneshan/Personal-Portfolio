<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Carousel</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous">
  <style>
    body {
      background-color: #f8f9fa;
    }
    .card {
      /* Ensure all cards in a row are the same height */
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .card-body {
      /* Allow card body to grow and fill space */
      flex-grow: 1;
    }
    .card-footer {
      background-color: #f8f9fa;
      border-top: 1px solid #eee;
    }
    /* Style for carousel controls */
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      background-color: #343a40;
      border-radius: 50%;
      padding: 1.5rem;
      background-size: 50%;
    }
    .carousel-control-prev {
      left: -50px; /* Position controls outside the carousel */
    }
    .carousel-control-next {
      right: -50px; /* Position controls outside the carousel */
    }
    @media (max-width: 768px) {
      .carousel-control-prev,
      .carousel-control-next {
        /* Bring controls inside on smaller screens */
        left: 0;
        right: 0;
      }
      .carousel-control-prev {
        justify-content: flex-start;
      }
      .carousel-control-next {
        justify-content: flex-end;
      }
      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  </style>
</head>
<body>

  <div class="container my-5">
    <h1 class="text-center fw-bold mb-5">My Projects</h1>

    <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Carousel Inner - This will be populated by JavaScript -->
      <div class="carousel-inner">
        <!-- Projects will be injected here -->
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"></script>

  <script>
    // Hardcoded project data (same as your React component)
    const allProjects = [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with product listings, a shopping cart, and a payment gateway.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
      },
      {
        id: 2,
        title: 'Data Visualization Dashboard',
        description: 'A web app for visualizing complex datasets using interactive charts and graphs.',
        technologies: ['React', 'D3.js', 'Tailwind CSS']
      },
      {
        id: 3,
        title: 'Social Media App',
        description: 'A clone of a popular social media platform allowing users to post, comment, and follow others.',
        technologies: ['React Native', 'Firebase', 'Firestore']
      },
      {
        id: 4,
        title: 'Project Management Tool',
        description: 'A Trello-like board for managing tasks, assigning users, and tracking project progress.',
        technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL']
      },
      {
        id: 5,
        title: 'Recipe Finder',
        description: 'An application that finds recipes based on the ingredients you have at home, using a third-party API.',
        technologies: ['Vue.js', 'Axios', 'Tailwind CSS']
      },
      {
        id: 6,
        title: 'Fitness Tracker',
        description: 'A mobile app to log workouts, track calories, and monitor fitness goals over time.',
        technologies: ['Flutter', 'Dart', 'SQLite']
      },
      {
        id: 7,
        title: 'Blog Platform',
        description: 'A simple, clean blogging platform with a Markdown editor and user authentication.',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Auth0']
      }
    ];

    document.addEventListener('DOMContentLoaded', function () {
      const carouselInner = document.querySelector('#projectCarousel .carousel-inner');
      const projectsPerPage = 3;

      // Group projects into chunks of 3
      for (let i = 0; i < allProjects.length; i += projectsPerPage) {
        const chunk = allProjects.slice(i, i + projectsPerPage);
        
        // Create a new carousel item for this chunk
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;
        
        // Create the row
        const row = document.createElement('div');
        row.className = 'row g-4'; // g-4 adds gutters (spacing)
        
        // Create a card for each project in the chunk
        chunk.forEach(project => {
          const col = document.createElement('div');
          // On mobile (sm), 1 col. On desktop (md), 3 cols.
          col.className = 'col-md-4 col-sm-12 d-flex'; 
          
          const technologiesHtml = project.technologies.map(tech => 
            `<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill me-1 mb-1">${tech}</span>`
          ).join('');

          col.innerHTML = `
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-semibold">${project.title}</h5>
                <p class="card-text text-muted">${project.description}</p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted small fw-light mb-2">Technologies Used</h6>
                <div>
                  ${technologiesHtml}
                </div>
              </div>
            </div>
          `;
          row.appendChild(col);
        });
        
        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
      }
    });
  </script>

</body>
</html>