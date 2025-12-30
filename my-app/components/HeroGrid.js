import { useEffect, useState } from 'react';
import styles from '../styles/HeroGrid.module.css';

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

                    return (
                        <div
                            key={i}
                            className={`${styles.cell} ${!visible[i] ? styles.hidden : ''}`}
                            style={{
                                backgroundPosition: `${(col / 4) * 100}% ${(row / 6) * 100}%`
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
