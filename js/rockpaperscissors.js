// Making gameMechanics an object so I can change features if I want.
let gameMechanics = {
    playOptions: ['Rock', 'Paper', 'Scissors']
}

let computerPlay = function(){
    const randomChoice = Math.floor(Math.random()*gameMechanics.playOptions.length);
    console.log(`Number decided is ${randomChoice}.`);

    const computerChoice = gameMechanics.playOptions[randomChoice];
    console.log(`The computer played ${computerChoice}!`)
}

let humanPlay = function(){
    // Take player input and sanitize it.
    let decision = window.prompt('What will you choose?', 'Write rock, paper, or scissors here.')
    decision = decision.toString();
    decision = decision.toLowerCase();

    const logChoice = function(){
        console.log(`You have chosen ${playerChoice}!`)
    };

    let playerChoice;
    
    // Change playerChoice to whatever they chose, or nothing.
    switch (decision){
        case 'rock':
            playerChoice = 'rock';
            logChoice();
            break;

        case 'paper':
            playerChoice = 'paper';
            logChoice();
            break;

        case 'scissors':
            playerChoice = 'scissors';
            logChoice();
            break;

        default:
            console.log(`You know, you can't play ${decision} in Rock Paper Scissors.`);
    }
}