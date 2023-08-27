let getComputerChoice = function() {
    let computerChoice = '';
    let randomChoice = Math.floor(Math.random() * 75 + 1);
    if (randomChoice <= 25) {
        computerChoice = "rock";
    } else if (randomChoice <= 50) {
        computerChoice = "paper";
    } else if (randomChoice > 50) {
        computerChoice = "scissor";
    } else {
        console.log("invalid number choosed");
    }

    return computerChoice;
}

// point manage
let playerPoint = 0;
let computerPoint = 0;

function playRound() {
    let inputChoice = prompt("Enter your choice");
    let playerSelection = inputChoice.toLowerCase();

    let computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(`${playerSelection} + ${computerSelection} = Draw!`);
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(`${playerSelection} + ${computerSelection} = You lose!`);
        computerPoint += 1;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log(`${playerSelection} + ${computerSelection} = You Win!`);
        playerPoint += 1;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`${playerSelection} + ${computerSelection} = You Win!`);
        playerPoint += 1;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log(`${playerSelection} + ${computerSelection} = Draw!`);
    } 
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        console.log(`${playerSelection} + ${computerSelection} = You Lose!`);
        computerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        console.log(`${playerSelection} + ${computerSelection} = You Lose!`);
        computerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log(`${playerSelection} + ${computerSelection} = You Win!`);
        playerPoint += 1;
    } 
    else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        console.log(`${playerSelection} + ${computerSelection} = Draw!`)
    } 
    else {
        console.log("Invalid Input (Refresh Game!)");
    }
}

function play() {
    for (let i = 1; i <= 5; i++){
        playRound(getComputerChoice());
    }

    console.log(`player   : ${playerPoint}`);
    console.log(`computer : ${computerPoint}`);

    if (playerPoint > computerPoint) {
        console.log("VICTORY !!!");
    } else if (playerPoint === computerPoint) {
        console.log("Too Bad Draw...");
    } else {
        console.log("You Lose ! :(((((")
    }
    
    restartGame();
}

function restartGame() {
    let inputPLayAgain = prompt("Play Again? (y to continue)");
    let playAgain = inputPLayAgain.toLowerCase;

    if (playAgain === 'y') {
        play();
    } else {
        console.log("Okay then!")
    }
}

// start game//
//play();


