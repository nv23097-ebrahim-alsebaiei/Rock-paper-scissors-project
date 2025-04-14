// Step 4: Global score variables
let humanScore = 0;
let computerScore = 0;

// Step 2: Get computer's choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1/3) {
    return "rock";
  } else if (randomNum < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Get human's choice
function getHumanChoice() {
  const choice = prompt("Choose Rock, Paper, or Scissors:");
  return choice.toLowerCase();
}

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
    console.log(`It's a tie! You both chose ${human}`);
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`);
  }
}

// Step 6: Play the full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`\nFinal Score: You ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

// To play, open your browser's console and call:
playGame();
