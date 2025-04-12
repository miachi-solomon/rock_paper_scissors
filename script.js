let computerChoice = undefined;
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
    let humanChoice = prompt('Rock, Paper or Scissors');
    return humanChoice;
}
