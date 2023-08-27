// button
const rock = document.querySelector('.r-btn');
const paper = document.querySelector('.p-btn');
const scissor = document.querySelector('.s-btn');
const play = document.querySelector('.play-btn');

//other
const result = document.querySelector('.result');
const scoreDisplay = document.querySelector('.score-display');
const playerDisplay = document.querySelector('.player-point');
const computerDisplay = document.querySelector('.computer-point')


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
        result.textContent = `${playerSelection} + ${computerSelection} = Draw!`;
    } 
    else {
        result.textContent = "Invalid Input (Refresh Game!)";
    }

    playerDisplay.textContent = `player   : ${playerPoint}`;
    computerDisplay.textContent = `computer : ${computerPoint}`;
}

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
})
   
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
})
   
scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    playRound();
})

