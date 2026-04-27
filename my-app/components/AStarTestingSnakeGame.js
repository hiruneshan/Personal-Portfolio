/**
 * A* Pathfinding Logic for Snake/Robot Simulation
 * 
 * Goal: Find the shortest path from the Snake's Head (Start) to the Food (Target)
 * avoiding the Snake's Body (Obstacles) on a 2D Grid.
 * 
 * ==========================================
 * 1. DATA STRUCTURES & SETUP
 * ==========================================
 * - Grid: A 2D array representing the game board. 
 *         Coordinates are (x, y).
 * 
 * - Node Structure:
 *   Every cell on the grid is a "Node" with the following properties:
 *     - x, y: Coordinates on the grid.
 *     - gCost: Distance from starting node.
 *     - hCost: Heuristic distance to target (Manhattan distance: |x1 - x2| + |y1 - y2|).
 *     - fCost: Total cost (gCost + hCost).
 *     - parent: A reference to the previous node (used to trace the path back).
 *     - isObstacle: Boolean true if this cell is part of the snake's body (excluding tail if it moves).
 * 
 * - Lists:
 *     - openSet: A list of nodes to be evaluated (starts with just the Start Node).
 *     - closedSet: A list of nodes already evaluated.
 * 
 * ==========================================
 * 2. MAIN A* ALGORITHM LOOP
 * ==========================================
 * function findPath(startPos, targetPos, snakeBodyList) {
 * 
 *   // INITIALIZE
 *   1. Create Start Node and Target Node.
 *   2. Add Start Node to openSet.
 * 
 *   // LOOP
 *   3. WHILE openSet is NOT empty:
 *      a. Find the node in openSet with the LOWEST fCost. 
 *         (If fCosts are equal, pick the one with the lowest hCost).
 *         Let's call this the 'currentNode'.
 * 
 *      b. Remove currentNode from openSet.
 *      c. Add currentNode to closedSet.
 * 
 *      d. CHECK FOR WIN (Target Found):
 *         IF currentNode coordinates == Target Node coordinates:
 *            // We found the path!
 *            return retracePath(Start Node, currentNode);
 * 
 *      e. GET NEIGHBORS:
 *         Find all valid adjacent cells (Up, Down, Left, Right).
 *         FOR EACH neighbor OF currentNode:
 *            
 *            // 1. Skip invalid neighbors:
 *            IF neighbor is out of bounds (hit wall) 
 *            OR neighbor is an obstacle (snake body) 
 *            OR neighbor is in closedSet:
 *                CONTINUE (skip to next neighbor).
 * 
 *            // 2. Calculate costs:
 *            Let newMovementCostToNeighbor = currentNode.gCost + 1 (distance is always 1 in grid)
 * 
 *            // 3. Update neighbor if we found a better path or it's unvisited:
 *            IF newMovementCostToNeighbor < neighbor.gCost OR neighbor is NOT in openSet:
 *                neighbor.gCost = newMovementCostToNeighbor
 *                neighbor.hCost = calculateManhattanDistance(neighbor, Target Node)
 *                neighbor.fCost = neighbor.gCost + neighbor.hCost
 *                neighbor.parent = currentNode
 *                
 *                IF neighbor is NOT in openSet:
 *                    add neighbor to openSet
 * 
 *   // No path found (Snake is trapped)
 *   return null; 
 * }
 * 
 * ==========================================
 * 3. RETRACE PATH HELPER
 * ==========================================
 * function retracePath(startNode, endNode) {
 *    1. Create an empty path array.
 *    2. Set currentNode = endNode.
 *    3. WHILE currentNode != startNode:
 *         a. push currentNode to path array.
 *         b. currentNode = currentNode.parent.
 *    4. Reverse the path array (since we traced backwards from end to start).
 *    5. return path array.
 * }
 * 
 * ==========================================
 * 4. GAME TICK INTEGRATION
 * ==========================================
 * - Every frame/tick:
 *   1. Call findPath(snakeHead, foodLocation, snakeBody).
 *   2. If a path is returned, extract the FIRST step of the path.
 *   3. Move snake head to that first step.
 *   4. Update snake body accordingly.
 */
