import { useEffect, useState } from 'react';
import styles from '../styles/SnakeGameModal.module.css';
import SnakeGame from './SnakeGame';
import AStarTestingSnakeGame from './AStarSnakeGame';

export default function SnakeGameModal({ isOpen, onClose }) {
    const [gameMode, setGameMode] = useState('normal');
    const [isDocOpen, setIsDocOpen] = useState(false);

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

                <div style={{ position: 'relative' }}>
                    {gameMode === 'normal' ? <SnakeGame isPaused={isDocOpen} /> : <AStarTestingSnakeGame isPaused={isDocOpen} />}

                    {isDocOpen && (
                        <div className={styles.docPopup}>
                            <button className={styles.closeDocButton} onClick={() => setIsDocOpen(false)}>&times;</button>
                            <p>
                                This Snake game features an <span style={{ color: '#64ffda', fontWeight: 'bold' }}>AI-controlled player</span> that uses the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>A* (A-Star) pathfinding algorithm</span> to automatically navigate the board. The AI continuously calculates the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>shortest and safest path</span> to the food by evaluating both the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>distance traveled</span> and an <span style={{ color: '#64ffda', fontWeight: 'bold' }}>estimated distance to the goal</span>, allowing it to make smart, real-time decisions. It treats the snake’s body as <span style={{ color: '#64ffda', fontWeight: 'bold' }}>obstacles to avoid</span>, accounts for the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>wrap-around grid mechanics</span>, and adapts instantly as the game changes. If a direct path to the food is not available, the AI switches to a <span style={{ color: '#64ffda', fontWeight: 'bold' }}>safety fallback strategy</span>, choosing the safest possible move to stay alive. This creates a smooth and intelligent gameplay experience driven by <span style={{ color: '#64ffda', fontWeight: 'bold' }}>decision-making logic</span>, rather than randomness or learning.
                            </p>
                        </div>
                    )}
                </div>

                <div className={styles.toggleContainer} style={{ justifyContent: gameMode === 'astar' ? 'center' : 'center', gap: '1rem' }}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => {
                            setGameMode(gameMode === 'normal' ? 'astar' : 'normal');
                            setIsDocOpen(false);
                        }}
                    >
                        {gameMode === 'normal' ? "Watch AI Play (A* Algorithm)" : "Play Normal Game"}
                    </button>
                    {gameMode === 'astar' && (
                        <button
                            className={styles.toggleButton}
                            onClick={() => setIsDocOpen(!isDocOpen)}
                        >
                            Read Documentation
                        </button>
                    )}
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
