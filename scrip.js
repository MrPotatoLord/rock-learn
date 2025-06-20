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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  if (!button.className) {
    return;
  }
  button.addEventListener("click", () =>
    playRound(getComputerChoice(), button.className),
  );
});

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
    if (humanChoice == "paper") condition = "lose";
    if (humanChoice == "rock") condition = "win";
    if (condition === undefined) condition = "draw";
  }
  if (condition == "win") humanScore += 1;
  if (condition == "lose") computerScore += 1;
  const yaz = document.querySelector("p");
  yaz.textContent = `${condition}: ${computerChoice} was computer and u ${humanChoice}`;

  if (humanScore >= 5) {
    yaz.textContent = "YOU WIN HOLY SHIT BABY";
  }
  if (computerScore >= 5) {
    yaz.textContent = "YOU Lose HOLY Baby";
  }
}

// playRound(getComputerChoice(), getHumanChoice());
console.log(`${humanScore} ur score ${computerScore} is ther score`);
