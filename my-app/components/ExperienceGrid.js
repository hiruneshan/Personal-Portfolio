import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css'; // Reusing HeroGrid styles for consistency
import { motion } from 'framer-motion';

export default function ExperienceGrid() {
    const cols = 5;
    const rows = 16;
    // Enough to cover the section height approx.

    // Pattern: 1, 2, 1, 2... from the LEFT
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const row1 = [1, 0, 0, 0, 0]; // 1 block
        const row2 = [1, 1, 0, 0, 0]; // 2 blocks

        const pattern = [
            ...row1, // 1
            ...row1, // 1
            ...row2, // 2
            ...row1, // 1
            ...row2, // 2
            ...row1, // 1
            ...row2, // 2
            ...row2, // 2
            ...row1, // 1
            ...row2, // 2 (10th)
            ...row1, // 1
            ...row1, // 1
            ...row1, // 1
            ...row1, // 1
            ...row1, // 1
            ...row1  // 1 (Extra)
        ].map(Boolean);

        setVisible(pattern);
    }, []);

    return (
        <div className={styles.wrapper} style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: 'calc((100vh - 80px) * 2)',
            width: '35vw',
            maxWidth: '720px',
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            <div className={styles.grid} style={{ gridTemplateRows: 'repeat(16, 1fr)' }}>
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
                            initial={{ opacity: 0, x: -20 }} // Slide from left
                            whileInView={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : -20
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: row * 0.1
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
