import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ProjectCard({ project }) {
    return (
        <Card 
            className="h-100 shadow-lg border-0" 
            style={{ borderRadius: '1rem', backgroundColor: '#1E293B', color: 'white' }}
        >
            {/* Placeholder for project image/screenshot */}
            <Card.Img 
                variant="top" 
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                onError={(e) => {
                    // Fallback to a placeholder image if the URL fails
                    e.target.onerror = null; 
                    e.target.src = `https://placehold.co/600x400/10172A/ffffff?text=${project.title.split(' ')[0]}`;
                }}
                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            />
            
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-primary">{project.title}</Card.Title>
                <Card.Text className="text-muted mb-4 flex-grow-1">
                    {project.description}
                </Card.Text>

                <div className="mt-auto">
                    <Button 
                        variant="primary" 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                        Live Demo
                    </Button>
                    <Button 
                        variant="outline-light" 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}