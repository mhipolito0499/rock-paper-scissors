function computerPlay() {
    let shoot = Math.floor(Math.random() * 3)
    switch(shoot) {
        case 0:
            return "Rock"
        case 1:
            return "Paper";
        case 2:
            return "scissors";
        
    }
}

function singleRound(playerSelection, computerSelection) {
    /*If player chooses rock and computer chooses scissors, player wins. Else player loses*/
    /*If player chooses paper and computer chooses scissors, player loses. Else player wins*/
    /*If player chooses scissors and computer chooses scissors, neither win, go again.*/
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "Tie!"
    } 
    else{
        switch(playerSelection){
            case rock:
                if (computerSelection.toLowerCase() == paper){
                    return "You lose! Paper beats Rock!"
                }
                else{
                    return "You Win! Rock beats Scissors!"
                }
            case paper:
                if (computerSelection.toLowerCase() == scissors){
                    return "You Lose! Scissors beats Paper!"
                }
                else{
                    return "You Win! Paper beats Rock!"
                }
            case scissors:
                if (computerSelection.toLowerCase() == rock){
                    return "You lose! Rock beats Scissors"
                }
                else{
                    return "You Win! Scissors beat Paper!"
                }
            default:
                return "What? That's neither of the options. Choose rock, paper, OR scissors"
        }
    }
}

function game() {
    for(let i = 0; i<5; i++){
        let userInput = prompt("Choose rock, paper or scissors!");
        let computerInput = computerPlay();
        let result = singleRound(userInput.toLowerCase(),computerInput);
        console.log(result)
    }
}

game()

/*const playerSelection = "Rock";
const computerSelection = computerPlay()
console.log(singleRound(playerSelection, computerSelection));*/

