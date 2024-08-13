
//68
//------------------------------------------------------------------------------------------------------------------------------------------
// ROCK PAPER SCISSORS
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    if (result === "YOU WIN!") {
        playerScore++;
        resultDisplay.style.color = "green";
    } else if (result === "YOU LOSE!") {
        computerScore++;
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.style.color = "black";
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    ComputerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}
