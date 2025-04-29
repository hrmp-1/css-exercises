
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.round(Math.random() + Math.random())

    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else if (choice === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors: ")
    return (userInput)
}

function playRound(hc, cc) {
    if (hc === cc) {
        console.log("The human and computer have tied!")
    } else if ((hc === "paper" && cc === "rock") || (hc === "rock" && cc === "scissors") || (hc === "scissors" && cc === "paper")) {
        console.log("You have won! Human chose: " + hc + " and the computer chose: " + cc)
    } else {
        console.log("You have lost! Human chose: " + hc + " and the computer chose: " + cc)
    }
}

playRound(getHumanChoice(), getComputerChoice())