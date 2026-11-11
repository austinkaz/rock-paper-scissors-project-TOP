let value1 = ('rock');
let value2 = ('paper');
let value3 = ('scissors');


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
   

// console.log(getComputerChoice())




function getHumanChoice() {
    let userInput = prompt("Please enter your choice", "Rock, Paper, or Scissors");
    userInput = userInput.toLowerCase();
    return userInput;

}

// console.log(getHumanChoice())


let humanScore = 0;
let computerScore = 0;


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    return console.log("Your Score: " + humanScore, "Computer Score: " + computerScore)
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === value1 && computerChoice === value3) {
        humanScore++;
        return console.log("You Win! Rock beats Scissors.");
    }
    else if (humanChoice === value2 && computerChoice === value1) {
        humanScore++;
        return console.log("You Win! Paper beats Rock.");
    }
    else if (humanChoice === value3 && computerChoice === value2) {
        humanScore++;
        return console.log("You Win! Scissors beats Paper.");
    }
    else if (computerChoice === value1 && humanChoice === value3) {
        computerScore++;
        return console.log("You Lose! Rock beats Scissors.");
    }
    else if (computerChoice === value2 && humanChoice === value1) {
        computerScore++;
        return console.log("You Lose! Paper beats Rock.");
    }
    else if (computerChoice === value3 && humanChoice === value2) {
        computerScore++;
        return console.log("You Lose! Scissors beats Paper.");
    }
    else {
        return console.log("Tie!")
    }
    
}



// console.log(playGame());
playGame();
