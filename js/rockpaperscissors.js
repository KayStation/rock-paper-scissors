// Global vars
let playOptions = ['rock', 'paper', 'scissors']

// DOM manipulation for Robot
const robotImage = document.getElementById('robot');
function changeImage(choice){
    if(choice == 'rock'){
        robotImage.src="/images/robotrock.png";
        console.log('Changed image to Rock');
    } else if (choice == 'paper'){
        robotImage.src="/images/robotpaper.png";
        console.log('Changed image to paper.');
    } else if (choice == 'scissors'){
        robotImage.src="/images/robotscissors.png";
        console.log('Changed image to scissors.');
    }
}
// Restore robot face when clickd on.
robotImage.addEventListener("click", function (){
    robotImage.src="/images/robotbase.png";
});

// Dom manipulation for buttons
let anyButton = document.getElementsByClassName('button1');
let rockButton = document.getElementById('rockButton');
let paperButton = document.getElementById('paperButton');
let scissorsButton = document.getElementById('scissorsButton');


let chooseButton = function(choice){
    let playerInput = choice;
    console.log(`You have chosen ${playerInput}!`)
    return playerInput;
}

rockButton.addEventListener("click", function(){
    playGame('rock');
    console.log('lol');
});
paperButton.addEventListener("click", function (){
    playGame('paper')
});
scissorsButton.addEventListener("click", function (){
    playGame('scissors');
});


// Function to replace instructions with winner of playGame();

const instructions = document.getElementById('instructionsText');
function displayWinner(name){
    if (name == null){
        instructions.innerText = `Nobody has won!`
    } else {
        instructions.innerText = `${name} has won!`
    }
};




// The game itself. playerInput is decided by clicking a button.

function playGame(playerInput){
    // Define vars
    let winner;
    let human;
    let computer;

    // Define functions
    let computerPlay = function(){
        const randomChoice = Math.floor(Math.random()*playOptions.length);
        const computerChoice = playOptions[randomChoice];
        return computerChoice;
    }

    // What does the player play?
    let humanChoice = playerInput;
    console.log(`Human played ${playerInput}`);

    // computerPlay() outcome decides computerChoice
    let computerChoice = computerPlay();
    console.log(`Computer played ${computerChoice}`);
    changeImage(computerChoice);
    
    const computerWinLog = `Computer played ${computerChoice} and won.`;
    const humanWinLog = `Human played ${humanChoice} and won.`;


    // Decide winner
    if(humanChoice == computerChoice){
        console.log('Game tied.');
        displayWinner(winner);

        // Results if human chose rock
    } else if (humanChoice == 'rock'){

        if(computerChoice == 'paper'){
            winner = 'Computer';
            console.log(computerWinLog);
            displayWinner(winner);
            
        } else {
            winner = 'Human';
            console.log(humanWinLog);
            displayWinner(winner);
            
        }

        // Results if human chose paper
    } else if (humanChoice == 'paper'){

        if(computerChoice == 'scissors'){
            winner = 'Computer';
            console.log(computerWinLog);
            displayWinner(winner);
            
        } else {
            winner = 'Human';
            console.log(humanWinLog);
            displayWinner(winner);
            
        }
        // Results if human chose scissors
    } else if (humanChoice == 'scissors'){

        if(computerChoice == 'rock'){
            'Computer';
            console.log(computerWinLog);
            displayWinner(winner);
            
        } else {
            winner = 'Human';
            console.log(humanWinLog);
            displayWinner(winner);
            
        }
        // Results if human chose anything else.
    } else{
        console.log('Error');
    }
}

