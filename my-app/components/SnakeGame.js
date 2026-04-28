import { useEffect, useRef, useState } from 'react';
import styles from '../styles/SnakeGame.module.css';

const CANVAS_SIZE = 300;
const TILE_COUNT = 15;
const TILE_SIZE = CANVAS_SIZE / TILE_COUNT;
const SPEED = 100;

export default function SnakeGame({ customAutoPlay = null }) {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const directionQueue = useRef([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showBanner, setShowBanner] = useState(true);

    const spawnFood = () => {
        const x = Math.floor(Math.random() * TILE_COUNT);
        const y = Math.floor(Math.random() * TILE_COUNT);
        setFood({ x, y });
    };
    const autoPlay = () => {
        if (customAutoPlay) {
            const nextDir = customAutoPlay(snake, food, TILE_COUNT);
            if (nextDir) {
                directionQueue.current.push(nextDir);
            }
            return;
        }

        const head = snake[0];

        if (head.x < food.x) setDirection({ x: 1, y: 0 });
        else if (head.x > food.x) setDirection({ x: -1, y: 0 });
        else if (head.y < food.y) setDirection({ x: 0, y: 1 });
        else if (head.y > food.y) setDirection({ x: 0, y: -1 });
    };

    const moveSnake = () => {

        let currentDir;
        if (directionQueue.current.length > 0) {
            const nextDir = directionQueue.current.shift();
            setDirection(nextDir);
            currentDir = nextDir;
        } else {
            currentDir = direction;
        }

        if (currentDir.x === 0 && currentDir.y === 0) return;

        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        head.x += currentDir.x;
        head.y += currentDir.y;


        if (head.x < 0) head.x = TILE_COUNT - 1;
        if (head.x >= TILE_COUNT) head.x = 0;
        if (head.y < 0) head.y = TILE_COUNT - 1;
        if (head.y >= TILE_COUNT) head.y = 0;

        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
            if (!isAutoPlaying) {
                setGameOver(true);
                return;
            } else {

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

    // Initialize game
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.setTransform(TILE_SIZE, 0, 0, TILE_SIZE, 0, 0);
        spawnFood();
    }, []);

    // Banner Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBanner(false);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
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
    }, [snake, direction, gameOver, isAutoPlaying, autoPlay, moveSnake]);

    // Handle Key Press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isAutoPlaying) setIsAutoPlaying(false);

            // Determine the "last known direction" - either the last queued one, or current state
            const currentLastDir = directionQueue.current.length > 0
                ? directionQueue.current[directionQueue.current.length - 1]
                : direction;

            let newDir = null;

            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            switch (e.key) {
                case 'ArrowUp':
                    if (currentLastDir.y === 0) newDir = { x: 0, y: -1 };
                    break;
                case 'ArrowDown':
                    if (currentLastDir.y === 0) newDir = { x: 0, y: 1 };
                    break;
                case 'ArrowLeft':
                    if (currentLastDir.x === 0) newDir = { x: -1, y: 0 };
                    break;
                case 'ArrowRight':
                    if (currentLastDir.x === 0) newDir = { x: 1, y: 0 };
                    break;
                default:
                    break;
            }

            if (newDir) {
                directionQueue.current.push(newDir);
                // We'll update state in the game loop to sync with movement
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction, isAutoPlaying]);



    // Render
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.fillStyle = '#041036'; // Background
        context.fillRect(0, 0, TILE_COUNT, TILE_COUNT); // Clear canvas

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
        <div className={styles.gameWrapper}>
            {showBanner && (
                <div className={styles.welcomeBanner}>
                    This is a small game i created, enjoy!
                </div>
            )}
            <div className={styles.scoreBoard}>SCORE: {score}</div>
            <div className={styles.gameContainer}>
                <canvas
                    ref={canvasRef}
                    width={CANVAS_SIZE}
                    height={CANVAS_SIZE}
                    className={styles.gameCanvas}
                />
                <div className={styles.gameOverlay}>
                    {gameOver && (
                        <div className={styles.gameOverText}>
                            GAME OVER
                            <button onClick={() => {
                                setSnake([{ x: 10, y: 10 }]);
                                setGameOver(false);
                                setScore(0);
                                setDirection({ x: 0, y: 0 });
                                directionQueue.current = []; // Clear queue
                                setIsAutoPlaying(false);
                            }}>RESTART</button>
                        </div>
                    )}
                    {!gameOver && direction.x === 0 && direction.y === 0 && (
                        <div className={styles.startText}>Use Arrow Keys to Start</div>
                    )}
                </div>
            </div>
        </div>
    );
}
