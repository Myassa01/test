const choices = ["rock", "paper", "scissors"];
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playRound(playerChoice, computerChoice);
  });
});

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a tie! Both chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  updateScore();
}

function updateScore() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}
