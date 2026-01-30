import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css';
import { motion } from 'framer-motion';

export default function ContactGrid() {
    const cols = 5;
    const rows = 24;

    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const rowConfigs = {
            1: [0, 0, 0, 0, 1],
            2: [0, 0, 0, 1, 1],
            3: [0, 0, 1, 1, 1],
            4: [0, 1, 1, 1, 1]
        };

        const patternSequence = [2, 3, 4, 3, 1, 2];
        const flatPattern = [];

        for (let r = 0; r < rows; r++) {
            const configKey = patternSequence[r % patternSequence.length];
            flatPattern.push(...rowConfigs[configKey]);
        }

        setVisible(flatPattern.map(Boolean));
    }, []);

    return (
        <div className={styles.wrapper} style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            height: 'calc((100vh - 80px) * 2)',
            width: '35vw',
            maxWidth: '720px',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            <div className={styles.grid} style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}>
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
