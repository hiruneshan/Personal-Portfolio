import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    // Define the custom styles for the blur effect
    const customNavbarStyle = {
        // Dark Blue Background with 80% Opacity (rgba)
        backgroundColor: 'rgba(30, 41, 59, 0.8)', 
        // Apply the blur effect (requires a modern browser)
        backdropFilter: 'blur(10px)',
        // Ensure the blur effect covers the whole component (optional, but good practice)
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle light border
    };

    return (
        <Navbar
            // We remove the default 'bg' prop so our custom style is used
            variant="dark"
            expand="lg"
            sticky="top"
            // Apply the custom styles here
            style={customNavbarStyle} 
        >
            <Container>
                {/* Fixed the markdown bolding issue here */}
                <Navbar.Brand href="#home">
                    <strong>Hiru Wijemanne</strong>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto pushes the links to the right */}
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
