
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

// function getHumanChoice() {
//     let humanChoice = prompt('Rock, Paper or Scissors').toLowerCase();
//     return humanChoice;
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        //capitalize first letter of user input
        let firstChar = humanChoice.slice(0, 1).toUpperCase();
        let remainChar = humanChoice.slice(1);
        let finalString = firstChar + remainChar;
        // evaluate the winner
        if (finalString === 'Rock' && computerChoice === 'Rock') {
            document.querySelector('div').innerText = "It's a tie! You both chose Rock.";
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`; 
        } else if (finalString === 'Rock' && computerChoice === 'Paper') {
            document.querySelector('div').innerText = 'You lose! Paper beats Rock.';
            computerScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Rock' && computerChoice === 'Scissors') {
            document.querySelector('div').innerText = 'You win! Rock beats Scissors.';
            humanScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Paper' && computerChoice === 'Paper') {
            document.querySelector('div').innerText = "It's a tie! You both chose Paper.";
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Paper' && computerChoice === 'Rock') {
            document.querySelector('div').innerText = 'You win! Paper beats Rock';
            humanScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Paper' && computerChoice === 'Scissors') {
            document.querySelector('div').innerText = 'You lose! Scissors beats Paper.';
            computerScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Scissors' && computerChoice === 'Scissors') {
            document.querySelector('div').innerText = "It's a tie! You both chose Scissors.";
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Scissors' && computerChoice === 'Rock') {
            document.querySelector('div').innerText = 'You lose! Rock beats Scissors';
            computerScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        } else if (finalString === 'Scissors' && computerChoice === 'Paper') {
            document.querySelector('div').innerText = 'You win! Scissors beats Paper';
            humanScore++;
            document.querySelector('.scores').innerText = `Your score is ${humanScore}, computer score is ${computerScore}`;
        }

        if (humanScore == 5) {
            document.querySelector('.winner').innerText = 'You win!.';
        } else if (computerScore == 5) {
            document.querySelector('.winner').innerText = 'Computer wins!.';
        }
    }


    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener('click', function(e){
            humanChoice = e.target.innerHTML;
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        })
    });
}

playGame();