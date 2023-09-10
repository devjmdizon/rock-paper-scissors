//Player Name
const playerNameLabel = document.getElementById("player-name");

// Scores
const playerScore = document.querySelector("player-score-label");
const tieScore = document.querySelector("tie-score-label");
const computerScore = document.querySelector("computer-score-label");

// Containers
const scoreContainer = document.getElementById("score-container");
const moveContainer = document.getElementById("move-container");
const weaponsContainer = document.getElementById("weapons-container");

// Start Page
const startPage = document.getElementById("start-game");

// Moves
const playerMoveLabel = document.getElementById("player-move-img");
const computerMoveLabel = document.getElementById("computer-move-img");

//Buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Start Button
const startBtn = document.getElementById("start-btn");

const moveList = ["images/rock.png", "images/paper.png", "images/scissors.png"];

startBtn.addEventListener("click", () => {
  const getPlayerName = prompt("Enter player name: ");
  updatePlayerName(getPlayerName);
  startPageDisplay();
});

function updatePlayerName(playerName) {
  playerNameLabel.textContent = playerName;
}

function startPageDisplay() {
  if (scoreContainer && moveContainer && weaponsContainer && startPage) {
    scoreContainer.style.display = "flex";
    moveContainer.style.display = "flex";
    weaponsContainer.style.display = "block";
    startPage.style.display = "none";
  } else {
    console.error("One or more elements not found.");
  }

  playerMoveLabel.setAttribute("src", "images/rock.png");
}
// End of Start Button Process

// Player and Computer Move

function getComputerMove() {
  const randomIndex = Math.floor(Math.random() * (movelist.length - 1));
  if (randomIndex == 2) {
    return 2;
  } else if (randomIndex == 1) {
    return 1;
  } else {
    return 0;
  }
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function displayPlayerMove(playerMove) {
  if (playerMove == "rock") {
    return playerMoveLabel.setAttribute("src", "images/rock.png");
  } else if (playerMove == "paper") {
    return playerMoveLabel.setAttribute("src", "images/paper.png");
  } else {
    return playerMoveLabel.setAttribute("src", "images/scissors.png");
  }
}

function getWinner(getPlayerMove, getComputerMove) {
  if (getPlayerMove === getComputerMove) {
    return "tie";
  } else if (
    (getPlayerMove === "rock" && getComputerMove === "scissors") ||
    (getPlayerMove === "paper" && getComputerMove === "rock") ||
    (getPlayerMove === "scissors" && getComputerMove === "paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

function playGame(playerMove) {
  let computerMove = getComputerMove();
  playerMove = displayPlayerMove();
  getWinner(playerMove, computerMove);
}
