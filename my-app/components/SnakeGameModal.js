import { useEffect } from 'react';
import styles from '../styles/SnakeGameModal.module.css';
import SnakeGame from './SnakeGame';

export default function SnakeGameModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <SnakeGame />
            </div>
        </div>
    );
}

export function SnakeGameButton({ onClick }) {
    return (
        <button className={styles.floatingButton} onClick={onClick} title="Play Snake">
            🎮
        </button>
    )
}
