const value1 = 'Rock';
const value2 = 'Paper';
const value3 = 'Scissors';

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
   

console.log(getComputerChoice())




function getHumanChoice() {
    let choice = prompt("Please enter your choice", "Rock, Paper, or Scissors");
    return choice;

}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)