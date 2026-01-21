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
        const pattern = [
            // Row 1: 4
            0, 1, 1, 1, 1,
            // Row 2: 2
            0, 0, 0, 1, 1,
            // Row 3: 1
            0, 0, 0, 0, 1,
            // Row 4: 2
            0, 0, 0, 1, 1,
            // Row 5: 1
            0, 0, 0, 0, 1,
            // Row 6: 2
            0, 0, 0, 1, 1,
            // Repeat 1, 2 pattern...
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 1,
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 1,
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 1,
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 1
        ].map(Boolean);

        setVisible(pattern);
    }, []);

    return (
        <div className={styles.wrapper} style={{ position: 'absolute', right: 0, top: '100px', height: '100%', width: '400px', zIndex: 0, pointerEvents: 'none', opacity: 0.5 }}>
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
