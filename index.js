let btnContainer = document.querySelector(".container");
let results = document.querySelector(".results");

function getComputerChoice() {
    let num = Math.random();

    if(num < 0.33333) {
        return "piedra";
    }
    else if (num < 0.66666) {
        return "papel";

    } 
    else {
        return "tijera";
    }  
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            results.textContent = "empate";
        } else if (
            (humanChoice == "tijera" && computerChoice == "papel") ||
            (humanChoice == "papel" && computerChoice == "piedra") ||
            (humanChoice == "piedra" && computerChoice == "tijera")
        ) {
            results.textContent = `Ganaste: ${humanChoice} vence a ${computerChoice}`;
            humanScore++;
        }
        else {
            results.textContent = `Perdiste: ${computerChoice} vence a ${humanChoice}`;
            computerScore++;
        }
    }

    btnContainer.addEventListener("click", (event) => {
        let humanChoice = event.target.id;
        playRound(humanChoice, getComputerChoice());
    });
}

playGame();


