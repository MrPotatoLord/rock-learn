function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice > 2) {
    return "rock";
  }
  if (choice > 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("enter selection dum dum");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(computerChoice, humanChoice) {
    let condition;
    if (computerChoice == "rock") {
      if (humanChoice == "paper") condition = "win";
      if (humanChoice == "scissors") condition = "lose";
      if (condition === undefined) condition = "draw";
    }
    if (computerChoice == "paper") {
      if (humanChoice == "scissors") condition = "win";
      if (humanChoice == "rock") condition = "lose";
      if (condition === undefined) condition = "draw";
    }
    if (computerChoice == "scissors") {
      if (humanChoice == "paper") condition = "win";
      if (humanChoice == "rock") condition = "lose";
      if (condition === undefined) condition = "draw";
    }
    if (condition == "win") humanScore += 1;
    if (condition == "lose") computerScore += 1;
    const yaz = document.querySelector("p");
    yaz.textContent = `${condition}: ${computerChoice} was computer and u ${humanChoice}`;
  }

  playRound(getComputerChoice(), getHumanChoice());
  console.log(`${humanScore} ur score ${computerScore} is ther score`);
}
playGame();
