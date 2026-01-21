import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css'; // Reusing HeroGrid styles for consistency
import { motion } from 'framer-motion';

export default function AboutGrid() {
    const cols = 5;
    const rows = 14;
    // Enough to cover the section height approx.
    // Pattern: 4, 2, 1, 2, 1, 2...

    // 4: [0, 1, 1, 1, 1]
    // 2: [0, 0, 0, 1, 1] (Right aligned?) User said "add same boxes to the right side".
    // 1: [0, 0, 0, 0, 1]
    // 2: [0, 0, 0, 1, 1]

    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const row2 = [0, 0, 0, 1, 1];
        const row1 = [0, 0, 0, 0, 1];

        const pattern = [
            ...row2, // Row 1: 2
            ...row1, // Row 2: 1
            ...row1, // Row 3: 1
            ...row2, // Row 4: 2
            ...row2, // Repeat 2
            ...row1, // 1
            ...row1, // 1
            ...row2, // 2
            ...row2,
            ...row1,
            ...row1,
            ...row2,
            ...row2,
            ...row1
        ].map(Boolean);

        setVisible(pattern);
    }, []);

    return (
        <div className={styles.wrapper} style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: 'calc((100vh - 80px) * 2)',
            width: '45vw',
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
                            initial={{ opacity: 0, x: 20 }}
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
