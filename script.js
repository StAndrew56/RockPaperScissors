let humanScore = 0;
let computerScore = 0;



function playGame(num){

    if(humanScore == 5){
        return 0;
    }
    else if(computerScore == 5){
        return 0;
    }

    else{
        playRound(getHumanChoice(num), getComputerGuess());
    }
}



function getComputerGuess(){
    let compChoice = Math.floor(Math.random() * 3);
    const change = document.querySelector(".computer img");

    if(compChoice == 0){
        change.src= '/images/rock.png';
        change.alt= 'rock';
        return compChoice;
    }
    else if(compChoice == 1){
        change.src='/images/paper.png';
        change.alt= 'paper';
        return compChoice;

    }
    
    else if(compChoice == 2){
        change.src = '/images/scissors.png';
        change.alt= 'scissors';
        return compChoice;

    }
    

    

}

function getHumanChoice(num){
    const change = document.querySelector(".player img");
    if(num == 0){
        change.src= '/images/rock.png';
        change.alt= 'rock';
        return 0;
    }
    else if(num == 1){
        change.src='/images/paper.png';
        change.alt= 'paper';
        return 1;
    }
    
    else if(num == 2){
        change.src = '/images/scissors.png';
        change.alt= 'scissors';
        return 2;
    }
}

function playRound(users_Choice, computers_Guess){
    const gameOver = document.getElementById("five_games");
    // 0 = Rock
    // 1 = Paper
    // 2 = Scissors
    let playerScore= document.querySelector(".score1 p");
    let compScore= document.querySelector(".score2 p");
    const roundWinner = document.getElementById("winner");


    if(users_Choice == computers_Guess){
        console.log("IT'S A TIE!");
        roundWinner.innerHTML = "It's A Draw!";
        roundWinner.style.backgroundColor = "gray";

    }
    else if(users_Choice == 0 && computers_Guess ==1){
        console.log("You Lose!");
        computerScore++;
        compScore.innerHTML = computerScore;
        roundWinner.innerHTML = "You Lose!";
        roundWinner.style.backgroundColor = "red";

    }
    else if(users_Choice == 0 && computers_Guess ==2){
        console.log("You Win!");
        humanScore++;
        playerScore.innerHTML = humanScore;
        roundWinner.innerHTML = "You Win!";
        roundWinner.style.backgroundColor = "green";
    }
    else if(users_Choice == 1 && computers_Guess ==0){
        console.log("You Win!");
        humanScore++;
        playerScore.innerHTML = humanScore;
        roundWinner.innerHTML = "You Win!";
        roundWinner.style.backgroundColor = "green";
    }
    else if(users_Choice == 1 && computers_Guess ==2){
        console.log("You Lose!");
        computerScore++;
        compScore.innerHTML = computerScore;
        roundWinner.innerHTML = "You Lose!";
        roundWinner.style.backgroundColor = "red";

    }
    else if(users_Choice == 2 && computers_Guess ==0){
        console.log("You Lose!");
        computerScore++;
        compScore.innerHTML = computerScore;
        roundWinner.innerHTML = "You Lose!";
        roundWinner.style.backgroundColor = "red";
    }
    else if(users_Choice == 2 && computers_Guess ==1){
        console.log("You Win!");
        humanScore++;
        playerScore.innerHTML = humanScore;
        roundWinner.innerHTML = "You Win!";
        roundWinner.style.backgroundColor = "green";
    }

    if(humanScore == 5){
        gameOver.innerHTML = "Congraulations, You Won The Game!!"
    }
    else if(computerScore == 5){
        gameOver.innerHTML = "Game Over Computer Wins!"
    }

}

