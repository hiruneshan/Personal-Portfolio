import React, { useMemo } from 'react';
import SnakeGame from './SnakeGame';

/**
 * A* Pathfinding Logic for Snake Game
 */
export default function AStarTestingSnakeGame({ isPaused = false }) {
    // The autoPlay function using A*
    const autoPlayAStar = useMemo(() => {
        return (snake, food, TILE_COUNT) => {
            const head = snake[0];
            
            // Helper to get distance accounting for wrapping grid
            const getDist = (a, b) => {
                const dx = Math.min(Math.abs(a.x - b.x), TILE_COUNT - Math.abs(a.x - b.x));
                const dy = Math.min(Math.abs(a.y - b.y), TILE_COUNT - Math.abs(a.y - b.y));
                return dx + dy;
            };

            const getNeighbors = (node) => {
                const dirs = [{x: 0, y: -1}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 1, y: 0}];
                const neighbors = [];
                for (let d of dirs) {
                    const nx = (node.x + d.x + TILE_COUNT) % TILE_COUNT;
                    const ny = (node.y + d.y + TILE_COUNT) % TILE_COUNT;
                    
                    // Treat the snake's body as obstacles.
                    // We don't check the very last tail segment because it will move forward.
                    const isBody = snake.some((segment, index) => {
                        if (index === snake.length - 1) return false; 
                        return segment.x === nx && segment.y === ny;
                    });
                    
                    if (!isBody) {
                        neighbors.push({x: nx, y: ny, dx: d.x, dy: d.y});
                    }
                }
                return neighbors;
            };

            // A* Search initialization
            const openSet = [ { ...head, g: 0, h: getDist(head, food), f: getDist(head, food), parent: null, dx: 0, dy: 0 } ];
            const closedSet = new Set();
            
            const posKey = (x, y) => `${x},${y}`;

            while (openSet.length > 0) {
                // Get node with lowest f
                openSet.sort((a, b) => a.f - b.f);
                const current = openSet.shift();

                // If path to food is found
                if (current.x === food.x && current.y === food.y) {
                    // Trace back to the first move
                    let curr = current;
                    while (curr.parent && curr.parent.parent) {
                        curr = curr.parent;
                    }
                    return { x: curr.dx, y: curr.dy };
                }

                closedSet.add(posKey(current.x, current.y));

                const neighbors = getNeighbors(current);
                for (let n of neighbors) {
                    if (closedSet.has(posKey(n.x, n.y))) continue;

                    const gScore = current.g + 1;
                    const hScore = getDist(n, food);
                    const fScore = gScore + hScore;

                    const existingNode = openSet.find(node => node.x === n.x && node.y === n.y);
                    if (!existingNode) {
                        openSet.push({ ...n, g: gScore, h: hScore, f: fScore, parent: current });
                    } else if (gScore < existingNode.g) {
                        existingNode.g = gScore;
                        existingNode.f = fScore;
                        existingNode.parent = current;
                    }
                }
            }

            // If no path to food is found (e.g. blocked), just make a safe move (survival mode)
            const safeNeighbors = getNeighbors(head);
            if (safeNeighbors.length > 0) {
                return { x: safeNeighbors[0].dx, y: safeNeighbors[0].dy };
            }

            // If completely trapped, return a default move (will cause game over)
            return { x: 0, y: -1 };
        };
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SnakeGame customAutoPlay={autoPlayAStar} isPaused={isPaused} />
        </div>
    );
}
