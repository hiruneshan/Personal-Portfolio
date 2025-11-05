import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // We need a longer delay (e.g., 200ms) to ensure React and the browser
        // register the initial state before applying the 'loaded' state transition.
        setTimeout(() => {
            setIsLoaded(true);
        }, 200); 
    }, []);

    const darkBlue = '#10172A';

    // --- ANIMATION STYLES (Implemented via inline style prop) ---
    // Initial state for the spotlight effect
    const spotlightEffectStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: darkBlue,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        transition: 'background-position 3s ease-out, background-size 3s ease-out',
        // Initial Light Cone (Small band at the top)
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0) 100%)',
        backgroundSize: '100% 50px',
    };

    // Loaded state overrides (The final state of the sweep)
    const spotlightLoadedStyle = {
        backgroundPosition: 'center bottom',
        backgroundSize: '100% 100%',
        // Fade the light cone to fully transparent
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)',
    };

    // Initial state for the dark overlay
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, 
        backgroundColor: darkBlue,
        opacity: 1, 
        transition: 'opacity 3s ease-out', 
        pointerEvents: 'none',
    };

    // Loaded state for the dark overlay (Fades it out)
    const overlayLoadedStyle = {
        opacity: 0, 
    };

    // Style for the content text (initial opacity)
    const contentStyle = {
        zIndex: 2, 
        position: 'relative',
        opacity: 0, // Start hidden
        animation: `fadeInText 3s ease-out forwards`,
        animationDelay: '0.5s',
    };
    
    return (
        <section id="home" style={{ minHeight: '100vh', position: 'relative', padding: '100px 0', overflow: 'hidden', backgroundColor: darkBlue }}>
            
            {/* ------------------------------------------------------------- */}
            {/* NOTE: We now define the fadeInText keyframes globally
               or rely on a polyfill/global <style> tag for this to work.
               For this demonstration, we'll include a simple style tag 
               to define the keyframes, as we cannot access global CSS files.
            */}
             <style>{`
                @keyframes fadeInText {
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
            {/* ------------------------------------------------------------- */}

            {/* The animated spotlight effect (Combines initial style with loaded state) */}
            <div 
                style={isLoaded 
                    ? { ...spotlightEffectStyle, ...spotlightLoadedStyle } 
                    : spotlightEffectStyle} 
            />

            {/* The initial dark overlay that fades out to reveal the light sweep */}
            <div 
                style={isLoaded 
                    ? { ...overlayStyle, ...overlayLoadedStyle } 
                    : overlayStyle} 
            />

            <Container className="text-center" style={contentStyle}>
                <Row className="align-items-center" style={{ minHeight: '80vh' }}>
                    <Col>
                        <h1 className="display-2 fw-bold mb-4" style={{ color: 'white' }}>
                            Hiru Wijemanne
                        </h1>
                        <p className="lead mb-5" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Full-Stack Developer                         </p>
                        <Button variant="primary" size="lg" className="me-3">
                            View Projects
                        </Button>
                        <Button variant="outline-light" size="lg">
                            Download Resume
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
