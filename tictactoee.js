const cells = document.querySelectorAll('.cell');
let turn = 'X'; // Player is 'X' and starts first
let gameOver = false;
let playerScore = 0;
let computerScore = 0;

// Function to make a move on the cell
function nextMove(cell) {
  if (cell.innerText === '' && !gameOver) {
    cell.innerText = turn; // Player's move
    if (checkForWinner(turn)) {
      updateScore(turn);
      gameOver = true;
      return;
    }
    if (checkForDraw()) {
      gameOver = true;
      document.getElementById('status').innerText = 'Draw!';
      return;
    }
    turn = 'O'; // Switch to Computer's turn
    setTimeout(computerMove, 300); // Delay for better UX
  }
}

// Function to handle computer's move
function computerMove() {
  let availableCells = Array.from(cells).filter(c => c.innerText === '');
  if (availableCells.length > 0 && !gameOver) {
    let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.innerText = turn;
    if (checkForWinner(turn)) {
      updateScore(turn);
      gameOver = true;
      return;
    }
    if (checkForDraw()) {
      gameOver = true;
      document.getElementById('status').innerText = 'Draw!';
      return;
    }
    turn = 'X'; // Switch back to Player's turn
  }
}

// Function to check for a winner
function checkForWinner(currentTurn) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of winCombinations) {
    const [a, b, c] = combo;
    if (cells[a].innerText === currentTurn && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
      document.getElementById('status').innerText = `Player ${currentTurn} wins!`;
      return true;
    }
  }
  return false;
}

// Function to check for a draw
function checkForDraw() {
  return Array.from(cells).every(cell => cell.innerText !== '');
}

// Function to update the score
function updateScore(winner) {
  if (winner === 'X') {
    playerScore++;
    document.getElementById('player-score').innerText = playerScore;
  } else if (winner === 'O') {
    computerScore++;
    document.getElementById('computer-score').innerText = computerScore;
  }
}

// Function to initialize (or reset) the game
function initGame() {
  cells.forEach(cell => cell.innerText = '');
  turn = 'X'; // Player starts
  gameOver = false;
  document.getElementById('status').innerText = '';
}

// Function to exit the game
function exitGame() {
  window.location.href = 'fd.html'; // Redirects to fd.html
}

// Add event listeners to the buttons
document.getElementById('next-game').addEventListener('click', initGame);
document.getElementById('exit-game').addEventListener('click', exitGame);

// Initialize the game for the first time
initGame();
