import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/HeroSection.module.css';

const CANVAS_SIZE = 300;
const GRID_SIZE = 15;
const SPEED = 100;

export default function SnakeGame() {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Initialize game
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.setTransform(CANVAS_SIZE / GRID_SIZE, 0, 0, CANVAS_SIZE / GRID_SIZE, 0, 0);
        spawnFood();
    }, []);

    // Game Loop
    useEffect(() => {
        const interval = setInterval(() => {
            if (gameOver) return;

            if (isAutoPlaying) {
                autoPlay();
            }

            moveSnake();
        }, SPEED);

        return () => clearInterval(interval);
    }, [snake, direction, gameOver, isAutoPlaying]);

    // Handle Key Press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isAutoPlaying) setIsAutoPlaying(false);

            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction, isAutoPlaying]);

    const spawnFood = () => {
        const x = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE));
        const y = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE));
        setFood({ x, y });
    };

    const moveSnake = () => {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        head.x += direction.x;
        head.y += direction.y;

        // Wrap around
        if (head.x < 0) head.x = (CANVAS_SIZE / GRID_SIZE) - 1;
        if (head.x >= CANVAS_SIZE / GRID_SIZE) head.x = 0;
        if (head.y < 0) head.y = (CANVAS_SIZE / GRID_SIZE) - 1;
        if (head.y >= CANVAS_SIZE / GRID_SIZE) head.y = 0;

        // Check collision with self
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
            if (!isAutoPlaying) {
                setGameOver(true);
                return;
            } else {
                // Simple reset for autoplay to keep it going
                setSnake([{ x: 10, y: 10 }]);
                setDirection({ x: 1, y: 0 });
                return;
            }
        }

        newSnake.unshift(head);

        // Check collision with food
        if (head.x === food.x && head.y === food.y) {
            setScore(score + 1);
            spawnFood();
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    const autoPlay = () => {
        const head = snake[0];

        // Simple AI: Move towards food
        if (head.x < food.x) setDirection({ x: 1, y: 0 });
        else if (head.x > food.x) setDirection({ x: -1, y: 0 });
        else if (head.y < food.y) setDirection({ x: 0, y: 1 });
        else if (head.y > food.y) setDirection({ x: 0, y: -1 });

        // Very basic collision avoidance (random turn if about to hit self)
        // This is a placeholder for better AI
    }

    // Render
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.fillStyle = '#041036'; // Background
        context.fillRect(0, 0, GRID_SIZE, GRID_SIZE); // Clear canvas (using scaled coords)

        // Draw Food
        context.fillStyle = '#FF0055'; // Neon Red/Pink
        context.fillRect(food.x, food.y, 1, 1);

        // Draw Snake
        context.fillStyle = '#64ffda'; // Neon Teal
        snake.forEach(segment => {
            context.fillRect(segment.x, segment.y, 1, 1);
        });
    }, [snake, food]);

    return (
        <div className={styles.gameContainer}>
            <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                className={styles.gameCanvas}
            />
            <div className={styles.gameOverlay}>
                {gameOver ? (
                    <div className={styles.gameOverText}>
                        GAME OVER
                        <button onClick={() => {
                            setSnake([{ x: 10, y: 10 }]);
                            setGameOver(false);
                            setScore(0);
                            setDirection({ x: 0, y: 0 });
                            setIsAutoPlaying(true);
                        }}>RESTART</button>
                    </div>
                ) : (
                    <div className={styles.score}>SCORE: {score}</div>
                )}
                {isAutoPlaying && <div className={styles.startText}>PRESS ARROWS TO PLAY</div>}
            </div>
        </div>
    );
}
