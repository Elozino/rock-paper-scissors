const rules = document.querySelector(".rules");
const modalPop = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".close");
const scoreDom = document.querySelector(".score")

//MODAL POP
rules.addEventListener("click", ()=>{
    modalPop.style.display = "block";
})
modalClose.addEventListener("click", ()=>{
    modalPop.style.display = "none";
})


//GAME DOM SELECTION FOR CLICKED ITEM
const btnChoice = document.querySelectorAll(".game-wrapper");
let userChoice = null
btnChoice.forEach((button)=>{
    button.addEventListener("click", ()=>{
        userChoice = button.getAttribute("data-choice")
        checkWinner()
    })
})



//GAME LOGIC
let score = 0
let choice = ["paper", "scissors", "rock"]

//Function to check winner
function checkWinner(){
    //Logic for computer choice
    const computerChoice = choice[Math.floor(Math.random() * choice.length)]
    
    
    if(userChoice === computerChoice){
        console.log("Draw")
    }
    else if(userChoice === "paper" && computerChoice === "rock" ||
    userChoice === "rock" && computerChoice === "scissors" ||
    userChoice === "scissors" && computerChoice === "paper" ){
        console.log("Win")
        updateScore(1)
    }
    else{
        console.log("Lose")
        updateScore(-1)
    }
}

function updateScore(value){
    score += value
    scoreDom.textContent = score
}



