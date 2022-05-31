// Rock Paper Scissors
// Psudocode
// HTML - Radio input with 3 selection for rock, paper and scissors, a button and a p element to output
// JS:
// initialize win counters
// add event listener to button
// function with player and computer inputs as arguments:
// determine winner using nested switch statements
// return winning player
// when button is pressed:
// get user input (values 1, 2 and 3)
// generate a random number from 1 to 3 (inclusive)
// run winCheck(userInput, compInput)
// increment appropriate player's win counter
// change innerHTML of output p element to the winner of the round



function randIntFromInterval(min, max) {
    // Generates a random number within the given limits (inclusive)
    // From StackOverflow
    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function compChoice() {
    const compNumChoice = randIntFromInterval(1, 3);
    switch (compNumChoice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

// initialize win counts
let playerWins = 0;
let compWins = 0;

function winCheck(playerInput, compInput) {
    // Checks the PLAYER'S win status
    switch (playerInput) {
        case 'Rock':
            switch (compInput) {
                case 'Rock':
                    return 'Draw';
                case 'Paper':
                    return 'Lose';
                case 'Scissors':
                    return 'Win';
            }
        case 'Paper':
            switch (compInput) {
                case 'Rock':
                    return 'Win'
                case 'Paper':
                    return 'Draw'
                case 'Scissors':
                    return 'Lose'
            }

        case 'Scissors':
            switch (compInput) {
                case 'Rock':
                    return 'Lose';
                case 'Paper':
                    return 'Win';
                case 'Scissors':
                    return 'Draw';
            }
    }
}

document.getElementById('rps-rounds-button').addEventListener('click', () => {
    const rounds = document.getElementById('rps-rounds').value;
    if (isNaN(rounds) || rounds === '' || +rounds < 0) {
        alert('Please enter a valid number of rounds');
    } else {
        // initialize initial variables
        const roundsElement = document.getElementById('rps-initial-input');
        const numberOfRounds = +roundsElement.textContent;
        console.log(numberOfRounds);
        roundsElement.parentNode.removeChild(numberOfRounds);
        const gameContainer = document.createElement('div');
        gameContainer.setAttribute("id", "rps-game-container");
        const moduleContainer = document.getElementById('rps-module-container');
        gameContainer.appendChild(gameContainer);
        const instructionPara = document.createElement('p');
        const instructionText = document.createTextNode('Make your selection:');
        instructionPara.appendChild(instructionText);
        gameContainer.appendChild(instructionPara);
        const submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'rps-submit-button');
        const submitButtonText = document.createTextNode('Submit');
        submitButton.appendChild(submitButtonText);
        gameContainer.appendChild(submitButton);
    }
})

document.getElementById('rps-submit-button').addEventListener('click', () => {
    console.log('Working');
    // Get selected radio input
    let playerInput;
    try {
        playerInput = document.querySelector("input[name=rps-input]:checked").value;
    } catch (err) {
        alert('Please make a selection');
    }
    
    const output = document.getElementById('rps-output');
    const compInput = compChoice();
    const playerWinStatus = winCheck(playerInput, compInput);

    

    switch (playerWinStatus) {
        case 'Win':
            output.innerHTML = `${playerInput} beats ${compInput.toLowerCase()}.<br>Player wins!`;
            playerWins++;
            break;
        case 'Lose':
            output.innerHTML = `${compInput} beats ${playerInput.toLowerCase()}.<br>Computer wins...`;
            compWins++;
            break;
        case 'Draw':
            output.innerHTML = 'Draw';
    }

    document.getElementById('win-counter-output').innerHTML = `Player wins: ${playerWins}<br>Computer wins: ${compWins}`;

})