import React, { useState, useEffect } from 'react';
import styles from '../styles/MouseLight.module.css';

function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.mouseLight} // Use the class from CSS Modules
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default MouseLight;