// button
const rock = document.querySelector('.r-btn');
const paper = document.querySelector('.p-btn');
const scissor = document.querySelector('.s-btn');
const play = document.querySelector('.play-btn');

//other
const result = document.querySelector('.result');
const scoreDisplay = document.querySelector('.score-display');

//new node
const playerScore = document.createElement('h3');
const computerScore = document.createElement('h3');


let getComputerChoice = () => {
    let computerChoice = '';
    let randomChoice = Math.floor(Math.random() * 75 + 1);
    if (randomChoice < 25) {
        computerChoice = 'rock';
    } else if (randomChoice <= 50) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    return computerChoice;
}

let playerPoint = 0;
let computerPoint = 0;
let playerSelection = '';

let playRound = () => {    
    let computerSelection = getComputerChoice();
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        result.textContent = `${playerSelection} + ${computerSelection} = Draw!`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = `${playerSelection} + ${computerSelection} = You lose!`;
        computerPoint += 1;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        result.textContent = `${playerSelection} + ${computerSelection} = You Win!`;
        playerPoint += 1;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = `${playerSelection} + ${computerSelection} = You Win!`;
        playerPoint += 1;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result.textContent = `${playerSelection} + ${computerSelection} = Draw!`;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        result.textContent = `${playerSelection} + ${computerSelection} = You Lose!`;
        computerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        result.textContent = `${playerSelection} + ${computerSelection} = You Lose!`;
        computerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        result.textContent = `${playerSelection} + ${computerSelection} = You Win!`;
        playerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        result.textContent = `${playerSelection} + ${computerSelection} = Draw!`
    } 
    else {
        result.textContent = "Invalid Input (Refresh Game!)";
    }
}

let start = () => {
    for(let i = 1; i <= 5; i++) {
        
        rock.addEventListener('click', () => {
            playerSelection = 'rock';
            return playerSelection;
        }),
           
        paper.addEventListener('click', () => {
           playerSelection = 'paper';
           return playerSelection;
        }),
           
        scissor.addEventListener('click', () => {
           playerSelection = 'scissor';
           return playerSelection;
        })

        playRound();
    }

    scoreDisplay.appendChild(playerScore);
    playerScore.textContent = playerPoint;
    scoreDisplay.appendChild(computerScore);
    computerScore.textContent = computerPoint;
    
}

play.addEventListener('click', start);