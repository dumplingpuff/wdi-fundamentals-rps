////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    switch (playerMove) {
    	case "rock":
		if (computerMove == "scissors") {
			winner = 'player';
		}
		else if (computerMove == "paper") {
			winner = 'computer';
		}
		else if (computerMove == "rock") {
			winner = 'tie';
		}
		break;
	case "paper":
		if (computerMove == "rock") {
			winner = 'player';
		}
		else if (computerMove == "scissors") {
			winner = 'computer';
		}
		else if (computerMove == "paper") {
			winner = 'tie';
		}
		break;
	case "scissors":
		if (computerMove == "paper") {
			winner = 'player';
		}
		else if (computerMove == "rock") {
			winner = 'computer';
		}
		else if (computerMove == "scissors") {
			winner = 'tie';
		}
		break;
    }
    return winner;
}
    	
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
	var computerWins = 0;
	
	while(playerWins < 5 && computerWins < 5) {
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
		var winner = getWinner(playerMove, computerMove);
		if(winner == 'player') {
			playerWins += 1;
			console.log("Player beats the computer with " + playerMove + " over " + computerMove + ".");
			console.log("Score is Player: " + playerWins + " Computer: " + computerWins + "\n");
		}
		else if(winner == 'computer') {
			computerWins += 1;
			console.log("Computer beats the player with " + computerMove + " over " + playerMove + ".");
			console.log("Score is Player: " + playerWins + " Computer: " + computerWins + "\n");
		}
		else if(winner == 'tie') {
			console.log("The round was a tie.");
			console.log("Both player and computer chose " + playerMove + ".");
			console.log("Score is Player: " + playerWins + " Computer: " + computerWins + "\n");
		}
	}
	return [playerWins, computerWins];
}

