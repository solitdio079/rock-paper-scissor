let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    //console.log(choice);
    return choice === 1 ? "rock":choice === 2 ? "paper": "scissors"
}

function getHumanChoice() {
    let choice = prompt('Your turn: ')
    return choice
}
//Select all the buttons
const btns = document.querySelector(".buttons-container") 
const logsContainer = document.querySelector("#gameLogs")
const humanScoreEl = document.querySelector("#humanScore")
const computerScoreEl = document.querySelector("#computerScore")

const resetContainer = document.querySelector(".resetContainer")
const reset = document.querySelector("#reset")

btns.addEventListener("click", (e) => {
  if(computerScore < 5 && humanScore < 5){
  let humanChoice = e.target.id
  const log = document.createElement("li")
  log.textContent = playRound(getComputerChoice(), humanChoice)
  computerScoreEl.textContent = "Computer: " + computerScore
  humanScoreEl.textContent = "You: " + humanScore
  logsContainer.appendChild(log)
}
if(computerScore == 5 || humanScore == 5){
  
  const log = document.createElement("li")

  const finalWinner = document.createElement("h2")
  finalWinner.textContent = computerScore > humanScore ? "You lost the Game": "Congratulations! You Win"
  log.appendChild(finalWinner)
  logsContainer.appendChild(log)
  resetContainer.classList.toggle("hidden")
  btns.classList.add("hidden")

}
  
  
})

reset.addEventListener("click", ()=> {
  computerScore = 0
  humanScore = 0
  logsContainer.textContent = ""
  computerScoreEl.textContent = "Computer: " + computerScore
  humanScoreEl.textContent = "You: " + humanScore
  resetContainer.classList.toggle("hidden")
  btns.classList.remove("hidden")
})



function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice.toLowerCase()) {
      return "It's a tie!"
    } else if (computerChoice === 'rock' && humanChoice.toLowerCase() === 'scissors') {
      computerScore++
      return 'You lose! rock beats scissors!'
    } else if (computerChoice === 'rock' && humanChoice.toLowerCase() === 'paper') {
      humanScore++
      return 'You win! paper beats rock!'
    }else if (computerChoice === 'scissors' && humanChoice.toLowerCase() === 'paper') {
      computerScore++
      return 'You lose! scissors beats paper!'
    }else if (computerChoice === 'scissors' && humanChoice.toLowerCase() === 'rock') {
      humanScore++
      return 'You win! rock beats scissors!'
    }
    else if (computerChoice === 'paper' && humanChoice.toLowerCase() === 'rock') {
      computerScore++
      return 'You lose! paper beats rock!'
    } else if (computerChoice === 'paper' && humanChoice.toLowerCase() === 'scissors') {
      humanScore++
      return 'You win! scissors beats paper!'
    } else {
        return `'${humanChoice}' is not a valid input!`
    }
}

function playGame() {
    // play the five Rounds
    // for (let i = 0; i < 5; i++){
    //    console.log(playRound(getComputerChoice(), getHumanChoice()))
    // }
    // if (computerScore < humanScore) {
    //     console.log(`Congrats! You Win! ${humanScore} vs ${computerScore} `)
    // } else {
    //     console.log(`You Lose! ${computerScore} vs ${humanScore}`)
    // }
}

playGame()
   

// 
// console.log(`Computer's Score: ${computerScore}`);
// console.log(`Human's Score: ${humanScore}`);