import React, { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css';

export default function HeroGrid() {
    const rows = 7;
    const cols = 5;
    const cells = Array.from({ length: rows * cols });
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const pattern = [
            0, 1, 1, 1, 1,
            0, 0, 1, 1, 1,
            0, 1, 1, 1, 1,
            0, 0, 0, 1, 1,
            0, 0, 1, 1, 1,
            0, 1, 1, 1, 1,
            1, 1, 1, 1, 1
        ];
        setVisible(pattern.map(Boolean));
    }, []);

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.gridContainer}>
                {cells.map((_, i) => {
                    const row = Math.floor(i / cols);
                    const col = i % cols;

                    return (
                        <div
                            key={i}
                            className={`${styles.gridCell} ${!visible[i] ? styles.hiddenCell : ''
                                }`}
                            style={{
                                backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`
                            }}
                        >
                            <div className={styles.cellOverlay} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
