let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const drawGame = () => {
    console.log("game was draw");
    document.querySelector("#msg").innerText = "Draw."
}    

const userWin = () => {
    console.log("user wins");
    document.querySelector("#user").innerText = parseInt(document.querySelector("#user").innerText) +1;
}

const compWin = () => {
    console.log("computer wins");
    document.querySelector("#computer").innerText = parseInt(document.querySelector("#computer").innerText) +1;
}
const genCompChoice = () => {
    let options = ["rock", "paper" , "scissors"];
    const RandomIndex = Math.floor(Math.random() *3);
    return options[RandomIndex];
}

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log ("computer choice" , compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else if (userChoice === "rock" && compChoice === "paper") {
        compWin();
        document.querySelector("#msg").innerText = "Paper beats Rock! Computer Wins.";
    }
    else if (userChoice === "rock" && compChoice === "scissors") {
        userWin();
        document.querySelector("#msg").innerText = "Rock beats Scissors! You Win.";
    }
    else if (userChoice === "paper" && compChoice === "rock") {
        userWin();
        document.querySelector("#msg").innerText = "Paper beats Rock! You win.";
    }
    else if (userChoice === "paper" && compChoice === "scissors") {
        compWin();
        document.querySelector("#msg").innerText = "Scissors beats Paper! Computer Wins.";
    }
    else if (userChoice === "scissors" && compChoice === "rock") {
        compWin();
        document.querySelector("#msg").innerText = "Rock beats Scissors! Computer Wins."
    }
    else if (userChoice === "scissors" && compChoice === "paper") {
        userWin();
        document.querySelector("#msg").innerText = "Scissors beats Paper! You Win."
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        const compChoice = genCompChoice();
    });
});