import { useEffect, useState } from 'react';
import styles from '../styles/SnakeGameModal.module.css';
import SnakeGame from './SnakeGame';
import AStarTestingSnakeGame from './AStarTestingSnakeGame';

export default function SnakeGameModal({ isOpen, onClose }) {
    const [gameMode, setGameMode] = useState('normal');

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
                {gameMode === 'normal' ? <SnakeGame /> : <AStarTestingSnakeGame />}
                <div className={styles.toggleContainer}>
                    <button 
                        className={styles.toggleButton} 
                        onClick={() => setGameMode(gameMode === 'normal' ? 'astar' : 'normal')}
                    >
                        {gameMode === 'normal' ? "Watch AI Play (A* Algorithm)" : "Play Normal Game"}
                    </button>
                </div>
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
