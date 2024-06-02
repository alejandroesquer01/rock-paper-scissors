function getComputerChoice() {
    let num = Math.random();

    if(num < 0.33333) {
        console.log("piedra " + num)
    }
    else if (num < 0.66666) {
        console.log("papel " + num)

    } 
    else {
        console.log("tijera "+ num)

    }  
}