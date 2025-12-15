import React from 'react';
import styles from '../styles/HeroGrid.module.css';

export default function HeroGrid() {
    // Create an array of 400 items for a 20x20 grid
    const cells = Array.from({ length: 400 });

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {/* The image is placed behind the grid */}
            <div className={styles.imageBackground}></div>

            <div className={styles.gridContainer}>
                {cells.map((_, index) => (
                    <div key={index} className={styles.gridCell}></div>
                ))}
            </div>
        </div>
    );
}
