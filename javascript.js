const getComputerChoice = () => {
	const choiceList = ["Rock", "Paper", "Scissors"]
	return(choiceList[Math.floor(Math.random() * choiceList.length)])
}

const playRound = (playerSelection, computerSelection) => {
	const result = document.querySelector(".results-container")
	if (playerSelection == computerSelection) {
		result.textContent = `Tie Game! You both picked ${computerSelection}`
		return("Tie");
	} if (playerSelection == "Rock") {
		switch(computerSelection) {
			case "Paper":
				result.textContent = "You Lose! The computer picked Paper!"
				return("Computer Wins");
			case "Scissors":
				result.textContent = "You Win! The computer picked Scissors!"
				return("Player Wins");
		}
	} if (playerSelection == "Paper") {
		switch(computerSelection) {
				case "Rock":
					result.textContent = "You Win! The computer picked Rock"
						return("Player Wins");
				case "Scissors":
					result.textContent = "You Lose! The computer picked Paper"
						return("Computer Wins");
		}
	} if (playerSelection == "Scissors") {
		switch(computerSelection) {
				case "Rock":
					result.textContent = "You Lose! The computer picked Scissors"
					return("Computer Wins");
				case "Paper":
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