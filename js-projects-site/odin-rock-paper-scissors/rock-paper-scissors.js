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
let playerWins;
let compWins;

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

document.getElementById('rps-button').addEventListener('click', () => {
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
            output.innerHTML = `${playerInput} beats ${compInput}<br>Player wins!`;
            playerWins++;
            break;
        case 'Lose':
            output.innerHTML = `${compInput} beats ${playerInput}<br>Computer wins!`;
            compWins++;
            break;
        case 'Draw':
            output.innerHTML = 'Draw';
    }

})