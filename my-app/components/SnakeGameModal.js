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
                        <div className={styles.docPopup} style={{ overflowY: 'hidden' }}>
                            <button className={styles.closeDocButton} onClick={() => setIsDocOpen(false)}>&times;</button>
                            <p>
                                This Snake game features an <span style={{ color: '#64ffda', fontWeight: 'bold' }}>algorithm-driven player</span> that uses the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>A* (A-Star) pathfinding algorithm</span> to automatically navigate the board. The system continuously calculates the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>shortest and safest path</span> to the food by evaluating both the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>distance traveled</span> and an <span style={{ color: '#64ffda', fontWeight: 'bold' }}>estimated distance to the goal</span>, enabling efficient real-time decision-making. It treats the snake's body as <span style={{ color: '#64ffda', fontWeight: 'bold' }}>obstacles to avoid</span>, accounts for the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>wrap-around grid mechanics</span>, and updates dynamically as the game state changes. If a direct path to the food is not available, it switches to a <span style={{ color: '#64ffda', fontWeight: 'bold' }}>safety fallback strategy</span>, selecting the safest possible move to stay alive. This results in smooth and intelligent gameplay driven by <span style={{ color: '#64ffda', fontWeight: 'bold' }}>deterministic decision-making logic</span>, rather than randomness or machine learning. Note that when the snake runs out of space and can no longer avoid itself, the <span style={{ color: '#64ffda', fontWeight: 'bold' }}>score resets</span> — this is an intentional consequence of the limited <span style={{ color: '#64ffda', fontWeight: 'bold' }}>15×15 grid</span>.
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
