const map = new Map();

map.set(1, "piedra");
map.set(2, "papel");
map.set(3, "tijera");



function getComputerChoice() {
    let num = Math.random();

    if(num < 0.33333) {
        return map.get(1);
    }
    else if (num < 0.66666) {
        return map.get(2);

    } 
    else {
        return map.get(3);
    }  
}

function getHumanChoice() {
    let choice = prompt("1. priedra \n2. papel \n3. tijera");

    return map.get(+choice);
}




function playGame () {

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            console.log("empate");
        } else if (
            (humanChoice == "tijera" && computerChoice == "papel") ||
            (humanChoice == "papel" && computerChoice == "piedra") ||
            (humanChoice == "piedra" && computerChoice == "tijera")
        ) {
            console.log(`Ganaste: ${humanChoice} vence a ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`Perdiste: ${computerChoice} vence a ${humanChoice}`);
            computerScore++;
        }
    }

    while(roundsPlayed < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        roundsPlayed++;
    }
    
    console.log(`Human socore: ${humanScore}. Computer score: ${computerScore}`);
}

playGame();




//        console.log(`Putos humanos: ${humanScore}. Puntos computadora: ${computerScore}` )
