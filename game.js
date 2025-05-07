const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const rows = 10;
const cols = 10;
const cellSize = 40;

canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

let playerX = 0;
let playerY = 0;

// Simple maze structure: 1 = wall, 0 = path
const maze = [
    [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
];

function drawMaze() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.fillStyle = maze[row][col] === 1 ? 'black' : 'white';
            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX * cellSize, playerY * cellSize, cellSize, cellSize);
}

function handleInput(event) {
    if (event.key === 'ArrowUp' && playerY > 0 && maze[playerY - 1][playerX] === 0) {
        playerY--;
    }
    if (event.key === 'ArrowDown' && playerY < rows - 1 && maze[playerY + 1][playerX] === 0) {
        playerY++;
    }
    if (event.key === 'ArrowLeft' && playerX > 0 && maze[playerY][playerX - 1] === 0) {
        playerX--;
    }
    if (event.key === 'ArrowRight' && playerX < cols - 1 && maze[playerY][playerX + 1] === 0) {
        playerX++;
    }
    drawMaze();
    drawPlayer();
}

window.addEventListener('keydown', handleInput);

drawMaze();
drawPlayer();