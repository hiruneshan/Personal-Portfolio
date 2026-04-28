import React from 'react';
import SnakeGame from './SnakeGame';

/**
 * A* Pathfinding Logic for Snake Game
 * 
 * OVERVIEW:
 * We are reusing the original SnakeGame component here so we don't have to build 
 * the game twice. This file acts as a wrapper. Its main job will be to provide 
 * a "brain" (the A* algorithm) to the existing SnakeGame.
 * 
 * HOW THE ALGORITHM WILL WORK:
 * 1. The goal is to find the shortest, safest path from the Snake's head to the 
 *    Food, without crashing into the Snake's own body or the walls.
 * 2. We treat the game board like a grid.
 * 3. The algorithm checks the empty squares around the snake, estimates which one 
 *    gets us closer to the food, and maps out a path.
 * 4. Once it finds a clear path to the food, it will tell the game which direction 
 *    to turn next.
 * 
 * HOW WE WILL CONNECT IT TO THE GAME:
 * 1. The SnakeGame component was updated to accept a `customAutoPlay` property.
 * 2. We will write the A* logic inside this file (AStarTestingSnakeGame.js).
 * 3. We will pass our A* function into the `<SnakeGame />` component below.
 * 4. Every time the game needs to move the snake, it will run our A* function to 
 *    ask: "Based on the grid, which direction should I go?".
 * 
 * POTENTIAL ISSUES (USER PLAYING vs. ALGORITHM):
 * - The original game lets the user press arrow keys to play manually.
 * - If the user presses an arrow key, the game automatically turns off "auto-play" 
 *   and lets the user take over.
 * - When we test the algorithm, we might run into a problem if we accidentally 
 *   touch the keyboard, as it will stop the algorithm from running.
 * - FIX: We may need to slightly modify `SnakeGame.js` later to completely disable 
 *   keyboard inputs when we are feeding it a `customAutoPlay` algorithm, or just 
 *   be careful not to touch the keys while it runs!
 */

export default function AStarTestingSnakeGame() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SnakeGame />
        </div>
    );
}
