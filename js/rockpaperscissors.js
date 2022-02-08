let playOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let robotScore = 0;


// Start button to begin game
const startButton = document.getElementById('startButton');
const instructionText = document.getElementById('instructionsText');


startButton.addEventListener('click', function(){
    //Upper Container---------------------------------------------------------------
    const holograph = document.getElementsByClassName('holograph')[0];

    // Create elements
    const scoreFlexContainer = document.createElement('div');
    const img = document.createElement('img');
    const robotScoreBox = document.createElement('div');
    const humanScoreBox = document.createElement('div');

    // Create text elements
    const robotH2 = document.createElement('h2');
    const humanH2 = document.createElement('h2');
    let RobotScoreText = document.createTextNode('Score = 0');
    let HumanScoreText = document.createTextNode('Score = 0'); 

    // Update instructions
    instructionText.innerText='Click your choice to begin.';

    // Add score flex container
    scoreFlexContainer.id="scoreFlexContainer";
    holograph.appendChild(scoreFlexContainer);

    // Add robot image
    img.src="images/robotbase.png";
    img.id="robotImage";
    scoreFlexContainer.appendChild(img);

    // Add robot score box
    robotScoreBox.id="robotScoreBox"
    scoreFlexContainer.appendChild(robotScoreBox);
    
    // Add robot score
    robotScoreBox.appendChild(robotH2)
    robotH2.id="robotScoreText";
    robotH2.appendChild(RobotScoreText);

    // Add human score box
    humanScoreBox.id="humanScoreBox"
    scoreFlexContainer.appendChild(humanScoreBox);

    // Add human score
    humanScoreBox.appendChild(humanH2)
    humanH2.id="humanScoreText";
    humanH2.appendChild(HumanScoreText);

    //Lower Container---------------------------------------------------------------

    const playArea = document.getElementById('playArea');

    // Create Play Area Elements
    const optionsContainer = document.createElement('div');

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');

    // Add elements to DOM
    playArea.appendChild(optionsContainer);
    optionsContainer.id="optionsContainer";

    optionsContainer.appendChild(rockButton);
    rockButton.id="rockButton";
    rockButton.innerText='Rock';

    optionsContainer.appendChild(paperButton);
    paperButton.id="paperButton";
    paperButton.innerText='Paper';

    optionsContainer.appendChild(scissorsButton);
    scissorsButton.id="scissorsButton";
    scissorsButton.innerText='Scissors';

    holograph.removeChild(startButton);
});



// Dom manipulation for buttons
let rockButton = document.querySelector('rockButton')
let paperButton = document.querySelector('paperButton')
let scissorsButton = document.querySelector('scissorsButton')


// Start the game when you click a button.
document.body.addEventListener( 'click', function (event) {
    if (event.target.id == 'rockButton') {
        playGame('rock');
    } else if (event.target.id == 'paperButton') {
        playGame('paper');
    } else if (event.target.id == 'scissorsButton'){
        playGame('scissors');
    };
});




// The game itself. playerInput is decided by clicking a button.

function playGame(playerInput){
    let winner;


    // Define functions
    let robotPlay = function(){
        const randomChoice = Math.floor(Math.random()*playOptions.length);
        const robotChoice = playOptions[randomChoice];
        return robotChoice;
    }

    // What does the player play?
    let humanChoice = playerInput;
    console.log(`Human played ${playerInput}`);

    // robotPlay() outcome decides robotChoice
    let robotChoice = robotPlay();
    console.log(`Robot played ${robotChoice}`);

    // Change robot's image based on their choice.
    const robotImage = document.getElementById('robotImage');
    function changeImage(choice){
        if(choice == 'rock'){
            robotImage.src="images/robotrock.png";
            console.log('Changed image to Rock');
        } else if (choice == 'paper'){
            robotImage.src="images/robotpaper.png";
            console.log('Changed image to paper.');
        } else if (choice == 'scissors'){
            robotImage.src="images/robotscissors.png";
            console.log('Changed image to scissors.');
        }
    }

    changeImage(robotChoice);
    
    
    let displayWinner = function(winner){
        if(winner == null){
            instructionText.innerHTML =`Match tied. Human's ${humanChoice} matched the robot's ${robotChoice}.`;
        } else if (winner == 'human'){
            instructionText.innerHTML =`Match won. Human's ${humanChoice} beat the robot's ${robotChoice}!`;
            humanScore += 1;
            humanScoreText.innerHTML = `Human Score: ${humanScore}`;
        } else {
            instructionText.innerHTML =`Match lost. robot's ${robotChoice} beat the human's ${humanChoice}.`;
            robotScore += 1;
            robotScoreText.innerHTML = `Robot Score: ${robotScore}`;
        };


    };



    // Decide winner
    if(humanChoice == robotChoice){
        winner = null;
        displayWinner(winner);
        console.log('Game tied.');
        

        // Results if human chose rock
    } else if (humanChoice == 'rock'){

        if(robotChoice == 'paper'){
            winner = 'robot';
            displayWinner(winner);
            
        } else {
            winner = 'human';
            displayWinner(winner);
        }

        // Results if human chose paper
    } else if (humanChoice == 'paper'){

        if(robotChoice == 'scissors'){
            winner = 'robot';
            displayWinner(winner);
            
        } else {
            winner = 'human';
            displayWinner(winner);
            
        }
        // Results if human chose scissors
    } else if (humanChoice == 'scissors'){

        if(robotChoice == 'rock'){
            winner = 'robot';
            displayWinner(winner);
            
        } else {
            winner = 'human';
            displayWinner(winner);
            
        }
        // Results if human chose anything else.
    } else{
        console.log('Error, player chose invalid option.');
    }
    if(humanScore == 5 || robotScore == 5){
        console.log('Game is over.');
        endGame();
    }
}

// End the game.
const endGame = function(){
    if (humanScore > robotScore){
        instructionText.innerHTML =`The game is over, and humanity has won! Press any button to restart the game.`;
    } else {
        instructionText.innerHTML =`The game is over, and the robots have won! We're doomed! Press any button to restart the game.`;
    };


    // Refresh page on button clicks.
    document.body.addEventListener( 'click', function (event) {
        if (event.target.id == 'rockButton') {
            location.reload();
        } else if (event.target.id == 'paperButton') {
            location.reload();
        } else if (event.target.id == 'scissorsButton'){
            location.reload();
        };
    });
}
// End the game when these values are reached.


