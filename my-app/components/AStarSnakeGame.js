import React, { useMemo } from 'react';
import SnakeGame from './SnakeGame';

/**
 * A* Pathfinding Logic for Snake Game
 */
export default function AStarTestingSnakeGame({ isPaused = false }) {
    const autoPlayAStar = useMemo(() => {
        return (snake, food, TILE_COUNT) => {
            const head = snake[0];

            const getDist = (a, b) => {
                const dx = Math.min(Math.abs(a.x - b.x), TILE_COUNT - Math.abs(a.x - b.x));
                const dy = Math.min(Math.abs(a.y - b.y), TILE_COUNT - Math.abs(a.y - b.y));
                return dx + dy;
            };

            const posKey = (x, y) => `${x},${y}`;

            const getNeighbors = (node) => {
                const dirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
                const neighbors = [];
                for (let d of dirs) {
                    const nx = (node.x + d.x + TILE_COUNT) % TILE_COUNT;
                    const ny = (node.y + d.y + TILE_COUNT) % TILE_COUNT;

                    const isBody = snake.some((segment, index) => {
                        if (index === snake.length - 1) return false;
                        return segment.x === nx && segment.y === ny;
                    });

                    if (!isBody) {
                        neighbors.push({ x: nx, y: ny, dx: d.x, dy: d.y });
                    }
                }
                return neighbors;
            };

            // Flood fill — counts how many tiles are reachable from a given node.
            // Used to pick the safest fallback direction when A* can't find a path.
            const floodFill = (startNode) => {
                const visited = new Set();
                const queue = [startNode];
                visited.add(posKey(startNode.x, startNode.y));
                while (queue.length > 0) {
                    const node = queue.shift();
                    for (const neighbor of getNeighbors(node)) {
                        const key = posKey(neighbor.x, neighbor.y);
                        if (!visited.has(key)) {
                            visited.add(key);
                            queue.push(neighbor);
                        }
                    }
                }
                return visited.size;
            };

            // A* Search
            const openSet = [{ ...head, g: 0, h: getDist(head, food), f: getDist(head, food), parent: null, dx: 0, dy: 0 }];
            const closedSet = new Set();

            while (openSet.length > 0) {
                openSet.sort((a, b) => a.f - b.f);
                const current = openSet.shift();

                if (current.x === food.x && current.y === food.y) {
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

            // No path to food found — use flood fill to pick the direction with the most open space
            const safeNeighbors = getNeighbors(head);
            if (safeNeighbors.length > 0) {
                const best = safeNeighbors.reduce((bestN, n) => {
                    return floodFill(n) >= floodFill(bestN) ? n : bestN;
                }, safeNeighbors[0]);
                return { x: best.dx, y: best.dy };
            }

            // Completely trapped — no moves available
            return { x: 0, y: -1 };
        };
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SnakeGame customAutoPlay={autoPlayAStar} isPaused={isPaused} />
        </div>
    );
}