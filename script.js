let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultDisplay = document.getElementById('result');
    let result;

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    updateScoreboard();
    resultDisplay.textContent = result;
    checkForWinner();
}

function updateScoreboard() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function checkForWinner() {
    if (playerScore === 1 || computerScore === 1) {
        const winner = playerScore === 1 ? 'Player' : 'Computer';
        alert(`${winner} wins the game!, They choose TicTacToe`);

        window.location.href = 'rules.html';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    document.getElementById('result').textContent = '';
}

updateScoreboard();
