const getComputerChoice = () => {
	const choiceList = ["ROCK", "PAPER", "SCISSORS"]
	return(choiceList[Math.floor(Math.random() * choiceList.length)])
}
const getPlayerChoice = () => {
	const playerSelection = prompt(`Type in either "Rock", "Paper", or "Scissors" to select your choice`)
	return(playerSelection.toUpperCase())
}
const playRound = (playerSelection, computerSelection) => {
	const result = document.querySelector(".results-container")
	if (playerSelection == computerSelection) {
		result.textContent = `Tie Game! You both picked ${computerSelection}`
		return("Tie");
	} if (playerSelection == "ROCK") {
		switch(computerSelection) {
			case "PAPER":
				result.textContent = "You Lose! The computer picked Paper!"
				return("Computer Wins");
			case "SCISSORS":
				result.textContent = "You Win! The computer picked Scissors!"
				return("Player Wins");
		}
	} if (playerSelection == "PAPER") {
		switch(computerSelection) {
				case "ROCK":
					result.textContent = "You Win! The computer picked Rock"
						return("Player Wins");
				case "SCISSORS":
					result.textContent = "You Lose! The computer picked Paper"
						return("Computer Wins");
		}
	} if (playerSelection == "SCISSORS") {
		switch(computerSelection) {
				case "ROCK":
					result.textContent = "You Lose! The computer picked Scissors"
					return("Computer Wins");
				case "PAPER":
					result.textContent = "You Win! The computer picked Paper"
					return("Player Wins");
		}
	}
}


const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id, getComputerChoice())
	})
})


const game = () => {
	let computerWins = 0;
	let playerWins = 0;
	let tieGames = 0;
	// remove logic for playing 5 rounds for now
	// for (let i = 0; i < 5; i++) {
	// 		const playerSelection = getPlayerChoice()
	// 		const computerSelection = getComputerChoice()
	// 		let result = playRound(playerSelection, computerSelection)   
	// 		if (result == "Player Wins") {
	// 				playerWins += 1
	// 		} if (result == "Computer Wins") {
	// 				computerWins += 1
	// 		} if (result == "Tie") {
	// 				tieGames += 1
	// 		}
	// 		console.log(`${playerWins} win(s) - ${computerWins} loss(es) - ${tieGames} tied game(s)`)
	// }
}
game()