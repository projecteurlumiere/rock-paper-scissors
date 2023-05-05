let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

const descriptionText = document.getElementsByClassName("description")[0];
const scoreText = document.getElementsByClassName("score")[0];

getScoreText();

function getScoreText(){
    scoreText.textContent = `Your score is ${playerScore}; Computer's score is ${computerScore}`;
}


descriptionText.textContent = "Choose your fighter!";

let buttonRock = document.querySelector('.buttonRock');
buttonRock.addEventListener('click', () => {
  playerChoice = "rock";
  playRound();
  getScoreText();
});


let buttonPaper = document.querySelector('.buttonPaper');
buttonPaper.addEventListener('click', () => {
  playerChoice = "paper";
  playRound();
  getScoreText();
});

let buttonScissors = document.querySelector('.buttonScissors');
buttonScissors.addEventListener('click', () => {
  playerChoice = "scissors";
  playRound();
  getScoreText();
});

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "rock";
    }
        else if (randomNumber == 2) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

function getGameResult(){
    playerChoice.toLowerCase();
    computerChoice.toLowerCase();
    if (playerChoice == computerChoice) {
        descriptionText.textContent = "Computer has chosen the same";
        return 1;
    }
    else if (computerChoice == "rock" && playerChoice == "scissors") {
        descriptionText.textContent = "Computer throws Rock at you, and your Scissors fall apart";
        return 2;
    }
    else if (computerChoice == "rock" && playerChoice == "paper") {
        descriptionText.textContent = "Computer throws Rock at you but you catch it with your Paper";
        return 3;
    }
    else if (computerChoice == "paper" && playerChoice == "rock") {
        descriptionText.textContent = "You throw Rock at the computer but it catches it with its Paper";
        return 2;
    }
    else if (computerChoice == "paper" && playerChoice == "scissors") {
        descriptionText.textContent = "Computer takes Paper out of its pocket, and you immediately cut it into pieces with your Scissors";
        return 3;
    }
    else if (computerChoice == "scissors" && playerChoice == "paper") {
        descriptionText.textContent = "You take Paper out of your pocket, but computer immediately cuts it into pieces with its Scissors";
        return 2;
    }
    else if (computerChoice == "scissors" && playerChoice == "rock") {
        descriptionText.textContent = "Your throw Rock at the computer, and its Scissors fall apart";
        return 3;
    }
}

function playRound() {
    computerChoice = getComputerChoice();
    gameResult = getGameResult();
    
    if (gameResult == 1) {
        return (computerScore++, playerScore++);
    }
    else if (gameResult == 2) {
        return computerScore++;
    }
    else if (gameResult == 3) {
        return playerScore++;
    }
    else {
        return computerScore++;
    }
}
