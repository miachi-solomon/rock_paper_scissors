
function getComputerChoice() {
    // return rock paper or scissors using Math.random()
    // use Math.random() to return a number from 1-3
    let number = Math.round(Math.random() * 2);
    // if Math.random() is 0 return Rock, if Math.random() is 1 return Paper, for any other value return Scissors
    if (number == 0) {
        return 'Rock';
    } else if (number == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper or Scissors').toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0;

    let computerScore = 0;

    for (i=1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    function playRound(humanChoice, computerChoice) {
        //capitalize first letter of user input
        let firstChar = humanChoice.slice(0, 1).toUpperCase();
        let remainChar = humanChoice.slice(1);
        let finalString = firstChar + remainChar;
        // evaluate the winner
        if (finalString === 'Rock' && computerChoice === 'Rock') {
            console.log("It's a tie! You both chose Rock.");
            humanScore++;
            computerScore++;
        } else if (finalString === 'Rock' && computerChoice === 'Paper') {
            console.log('You lose! Paper beats Rock.');
            computerScore++;
        } else if (finalString === 'Rock' && computerChoice === 'Scissors') {
            console.log('You win! Rock beats Scissors.');
            humanScore++;
        } else if (finalString === 'Paper' && computerChoice === 'Paper') {
            console.log("It's a tie! You both chose Paper.");
            humanScore++;
            computerScore++;
        } else if (finalString === 'Paper' && computerChoice === 'Rock') {
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else if (finalString === 'Paper' && computerChoice === 'Scissors') {
            console.log('You lose! Scissors beats Paper.');
            computerScore++;
        } else if (finalString === 'Scissors' && computerChoice === 'Scissors') {
            console.log("It's a tie! You both chose Scissors.");
            humanScore++;
            computerScore++;
        } else if (finalString === 'Scissors' && computerChoice === 'Rock') {
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        } else if (finalString === 'Scissors' && computerChoice === 'Paper') {
            console.log('You win! Scissors beats Paper.')
            humanScore++;
        }
    }
}

playGame();
