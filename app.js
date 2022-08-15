let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "ROCK";
  } else if (computerChoice === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return `Its Draw! ${playerSelection} vs ${computerSelection}.`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game(selection) {
  if (
    selection !== "ROCK" &&
    selection !== "PAPER" &&
    selection !== "SCISSORS"
  ) {
    alert(
      "You entered an incorrect selection!\nYou need to select either rock, paper or scissors"
    );
  } else {
    return playRound(selection, getComputerChoice());
  }
}

for (let i = 0; i < 5; i++) {
  let result = prompt("Type rock, paper or scissors!");
  result = result.toUpperCase();
  console.log(game(result));
  console.log(
    `Player score : ${playerScore} & Computer score : ${computerScore}`
  );
}

if (playerScore > computerScore) {
  console.log("YOU ARE THE WINNER! 😄");
} else if (playerScore < computerScore) {
  console.log("The computer won!");
} else {
  console.log("It's a draw!");
}
