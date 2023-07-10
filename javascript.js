const getComputerChoice = () => {
	const choiceList = ["Rock", "Paper", "Scissors"]
	return(choiceList[Math.floor(Math.random() * choiceList.length)])
}

const talliedScore = document.querySelector('h1');
const result = document.querySelector(".results-container")

let computerWins = 0;
let playerWins = 0;
let tieGames = 0;

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection == computerSelection) {
		result.textContent = `Tie Round! You both picked ${computerSelection}`
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

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id, getComputerChoice())
		if (computerWins == 5) {
			result.textContent = `GAME OVER - COMPUTER WINS`
			computerWins = 0;
			playerWins = 0;
			tieGames = 0;
		}	if (playerWins == 5) {
				result.textContent = `GAME OVER - PLAYER WINS`
				computerWins = 0;
				playerWins = 0;
				tieGames = 0;
			}
	})
})