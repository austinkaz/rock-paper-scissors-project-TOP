let value1 = 'rock';
let value2 = 'paper';
let value3 = 'scissors';


function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}




// Attach event listeners to the buttons and call playRound on click
document.getElementById('rock').addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});
// playRound is now called when a button is clicked, so this line is not needed
// playRound will now be called by the button event listeners


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === value1 && computerChoice === value3) {
// Removed unnecessary call to playRound on script load
        document.getElementById("result").textContent = "You Win! Rock beats Scissors.";
    }
    else if (humanChoice === value2 && computerChoice === value1) {
        humanScore++;
        document.getElementById("result").textContent = "You Win! Paper beats Rock.";
    }
    else if (humanChoice === value3 && computerChoice === value2) {
        humanScore++;
        document.getElementById("result").textContent = "You Win! Scissors beats Paper.";
    }
    else if (computerChoice === value1 && humanChoice === value3) {
        computerScore++;
        document.getElementById("result").textContent = "You Lose! Rock beats Scissors.";
    }
    else if (computerChoice === value2 && humanChoice === value1) {
        computerScore++;
        document.getElementById("result").textContent = "You Lose! Paper beats Rock.";
    }
    else if (computerChoice === value3 && humanChoice === value2) {
        computerScore++;
        document.getElementById("result").textContent = "You Lose! Scissors beats Paper.";
    }
    else {
        document.getElementById("result").textContent = "It's a tie!";
    }
    
}



