const getComputerChoice = () => {
	const choiceList = ["Rock", "Paper", "Scissors"]
	return(choiceList[Math.floor(Math.random() * choiceList.length)])
}

const talliedScore = document.querySelector('h1');

let computerWins = 0;
let playerWins = 0;
let tieGames = 0;

const playRound = (playerSelection, computerSelection) => {
	console.log(playerSelection)
	console.log(computerSelection)
	const result = document.querySelector(".results-container")
	if (playerSelection == computerSelection) {
		result.textContent = `Tie Game! You both picked ${computerSelection}`
		tieGames += 1
		talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
	} if (playerSelection == "Rock") {
		switch(computerSelection) {
			case "Paper":
				result.textContent = "You Lose! The computer picked Paper!"
				computerWins += 1
				talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
				break;
			case "Scissors":
				result.textContent = "You Win! The computer picked Scissors!"
				playerWins += 1
				talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
				break;
		}
	} if (playerSelection == "Paper") {
			switch(computerSelection) {
				case "Rock":
					result.textContent = "You Win! The computer picked Rock"
					playerWins += 1
					talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
					break;
				case "Scissors":
					result.textContent = "You Lose! The computer picked Paper"
					computerWins += 1
					talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
					break;
		}
	} if (playerSelection == "Scissors") {
			switch(computerSelection) {
				case "Rock":
					result.textContent = "You Lose! The computer picked Scissors"
					computerWins += 1
					talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
					break;
				case "Paper":
					result.textContent = "You Win! The computer picked Paper"
					playerWins += 1
					talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
					break;
		}
	}
	
}

// const tallyScore = (result) => {
// 	const talliedScore = document.querySelector('h1');
// 	while (computerWins < 5 || playerWins < 5) {
// 		if (result == "Player Wins") {
// 				playerWins += 1
// 		} if (result == "Computer Wins") {
// 				computerWins += 1
// 		} if (result == "Tie") {
// 				tieGames += 1
// 		}
// 	}
// 	talliedScore.textContent = `Score: ${playerWins} - ${computerWins} - ${tieGames}`
// }

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id, getComputerChoice())
	})
})