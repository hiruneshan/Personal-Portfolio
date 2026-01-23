import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css';
import { motion } from 'framer-motion';

export default function HeroGrid() {
    const rows = 7;
    const cols = 5;
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        setVisible([
            0, 1, 1, 1, 1,
            0, 0, 1, 1, 1,
            0, 1, 1, 1, 1,
            0, 0, 0, 1, 1,
            0, 0, 1, 1, 1,
            0, 1, 1, 1, 1,
            1, 1, 1, 1, 1
        ].map(Boolean));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {Array.from({ length: rows * cols }).map((_, i) => {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    const isVisible = visible[i];

                    return (
                        <motion.div
                            key={i}
                            className={`${styles.cell} ${!isVisible ? styles.hidden : ''}`}
                            style={{
                                backgroundPosition: `${(col / 4) * 100}% ${(row / 6) * 100}%`
                            }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : -20
                            }}
                            transition={{
                                duration: 0.5,
                                delay: row * 0.15 + (col * 0.05) // Row by row with slight wave
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
