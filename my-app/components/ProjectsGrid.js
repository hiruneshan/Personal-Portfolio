import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css';
import { motion } from 'framer-motion';

export default function ProjectsGrid() {
    const cols = 5;
    const rows = 14;

    // Pattern: 1, 2, 3, 1, 1, 3
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const row1 = [0, 0, 0, 0, 1]; // 1 block right aligned
        const row2 = [0, 0, 0, 1, 1]; // 2 blocks right aligned
        const row3 = [0, 0, 1, 1, 1]; // 3 blocks right aligned

        const pattern = [
            ...row1, // 1
            ...row2, // 2
            ...row3, // 3
            ...row1, // 1
            ...row1, // 1
            ...row3, // 3
            ...row1, // 1
            ...row2, // 2
            ...row3, // 3
            ...row1, // 1
            ...row1, // 1
            ...row3, // 3
            ...row1, // 1
            ...row2  // 2
        ].map(Boolean);

        setVisible(pattern);
    }, []);

    return (
        <div className={styles.wrapper} style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: 'calc((100vh - 80px) * 2)',
            width: '35vw', // Consistent with other grids
            maxWidth: '720px',
            zIndex: 0,
            pointerEvents: 'none'
        }}>
            <div className={styles.grid} style={{ gridTemplateRows: 'repeat(14, 1fr)' }}>
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
                            initial={{ opacity: 0, x: 20 }} // Slide from right
                            whileInView={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : 20
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
