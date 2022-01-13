// Making gameMechanics an object so I can change features if I want.
let gameMechanics = {
    playOptions: ['rock', 'paper', 'scissors']
}

let computerPlay = function(){
    const randomChoice = Math.floor(Math.random()*gameMechanics.playOptions.length);
    // console.log(`Number decided is ${randomChoice}.`);

    const computerChoice = gameMechanics.playOptions[randomChoice];
    // console.log(`The computer played ${computerChoice}!`)

    return computerChoice;
}

let humanPlay = function(){
    // Take player input and sanitize it.
    let decision = window.prompt('What will you choose?', 'Write rock, paper, or scissors here.')
    decision = decision.toString();
    decision = decision.toLowerCase();

    const logChoice = function(){
        console.log(`You have chosen ${decision}!`)
    };

    
    // Change decision to whatever they chose, or nothing.
    switch (decision){
        case 'rock':
            logChoice();
            return 'rock';
            break;

        case 'paper':
            logChoice();
            return 'paper';
            break;

        case 'scissors':
            logChoice();
            return 'scissors';
            break;

        default:
            console.log(`You know, you can't play ${decision} in Rock Paper Scissors.`);
            return decision;
    }
}

function playGame(){
    let winner;
    let human;
    let computer;

    let humanChoice = humanPlay();
    console.log(`Human played ${humanChoice}`);

    let computerChoice = computerPlay();
    console.log(`Computer played ${computerChoice}`);
    
    const computerWinLog = `Computer played ${computerChoice} and won.`;
    const humanWinLog = `Human played ${humanChoice} and won.`;


    // Decide winner
    if(humanChoice == computerChoice){
        console.log('Game tied.');

        // Results if human chose rock
    } else if (humanChoice == 'rock'){

        if(computerChoice == 'paper'){
            winner = computer;
            console.log(computerWinLog);
        } else {
            winner = human;
            console.log(humanWinLog);
        }

        // Results if human chose paper
    } else if (humanChoice == 'paper'){

        if(computerChoice == 'scissors'){
            winner = computer;
            console.log(computerWinLog);
        } else {
            winner = human;
            console.log(humanWinLog);
        }
        // Results if human chose scissors
    } else if (humanChoice == 'scissors'){

        if(computerChoice == 'rock'){
            winner = computer;
            console.log(computerWinLog);
        } else {
            winner = human;
            console.log(humanWinLog);
        }
        // Results if human chose anything else.
    } else if (humanChoice == decision){
        console.log(`You know, ${decision} isn't a playable option.`);
    }
}