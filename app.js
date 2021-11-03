const rules = document.querySelector(".rules");
const modalPop = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".close");
const scoreDom = document.querySelector(".score");
const game = document.querySelector(".middle");
const gameChosen = document.querySelector(".container-choice");
const playAgain = document.querySelector(".play-again");
const gameResult = document.querySelector(".game-result");
const userSelect = document.querySelector("#user-select");
const computerSelect = document.querySelector("#computer-select");

//MODAL POP
rules.addEventListener("click", () => {
  modalPop.style.display = "block";
});
modalClose.addEventListener("click", () => {
  modalPop.style.display = "none";
});

//GAME DOM SELECTION FOR CLICKED ITEM
const btnChoice = document.querySelectorAll(".game-wrapper");
let userChoice = null;
btnChoice.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    checkWinner();
    game.classList.toggle("hide");
    gameChosen.classList.toggle("hide");
  });
});

//PLAY AGAIN
playAgain.addEventListener("click", () => {
  gameChosen.classList.toggle("hide");
  game.classList.toggle("hide");
});

//GAME LOGIC
let score = 0;
let choice = ["paper", "scissors", "rock"];

//Function to check winner
function checkWinner() {
  //Logic for computer choice
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];
  if (userChoice === computerChoice) {
    gameResult.innerHTML = "DRAW";
    console.log("Draw");
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    gameResult.innerHTML = "WIN";
    console.log("Win");
    updateScore(1);
  } else {
    gameResult.innerHTML = "LOSE";
    console.log("Lose");
    updateScore(-1);
  }
  //Updaate the view
  updateSelection(userSelect, userChoice);
  updateSelection(computerSelect, computerChoice);
}

function updateScore(value) {
  score += value;
  scoreDom.textContent = score;
}

//Function to update selection
function updateSelection(selectedNode, chosen) {
  //Class reset
  selectedNode.classList.remove("choice-paper");
  selectedNode.classList.remove("choice-scissors");
  selectedNode.classList.remove("choice-rock");

  //Update the image and style
  selectedNode.classList.add(`choice-${chosen}`);
  selectedNode.querySelector("img").src = `./images/icon-${chosen}.svg`;
}
