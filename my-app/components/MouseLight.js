import { useState, useEffect } from 'react';
import styles from '../styles/MouseLight.module.css';

function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  if (!mounted) return null;

  return (
    <div
      className={styles.mouseLight}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}

export default MouseLight;