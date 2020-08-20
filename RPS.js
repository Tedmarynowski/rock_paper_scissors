function computerPlay(){
    options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)]
  } 
var computerSelection = computerPlay();

const selection = document.querySelector('.selection');
const computerChoice = document.createElement("h2");
const outcome =  document.createElement("h2");
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const currentRound = document.querySelector('.currentRound');

const gameEnd = document.createElement("h2")


let playerCurrentScore = 0;
let computerCurrentScore = 0;
let round = 0;



function playGame(player, computer){
    if (player == "Rock" && computerSelection == "Scissors"){
        outcome.textContent = "You win! " + player + " beats " + computer + ".";
        playerCurrentScore ++;
        round ++;
        computerChoice.classList.add('suspense2');
        outcome.classList.add('suspense');
        selection.appendChild(outcome);
        currentRound.textContent = round;
        playerScore.textContent = playerCurrentScore;
        if (round >= 5 && playerCurrentScore > computerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The player wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        }else if (round >= 5 && computerCurrentScore > playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The computer wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        } else if (round >= 5 && computerCurrentScore == playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "The game was a draw!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut');
            document.querySelector('.container').style.display = 'none';
        }

    } else if (player == "Paper" && computer == "Rock"){
        outcome.textContent = "You win! " + player + " beats " + computer + ".";
        playerCurrentScore ++;
        round ++;
        selection.appendChild(outcome);
        computerChoice.classList.add('suspense2');
        outcome.classList.add('suspense');
        currentRound.textContent = round;
        playerScore.textContent = playerCurrentScore;
        if (round >= 5 && playerCurrentScore > computerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The player wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        }else if (round >= 5 && computerCurrentScore > playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The computer wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        } else if (round >= 5 && computerCurrentScore == playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "The game was a draw!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        }

    }else if (player == "Scissors" && computer == "Paper"){
        outcome.textContent = "You win! " + player + " beats " + computer + ".";
        playerCurrentScore ++;
        round ++;
        selection.appendChild(outcome);
        computerChoice.classList.add('suspense2');
        outcome.classList.add('suspense');
        currentRound.textContent = round;
        playerScore.textContent = playerCurrentScore;
        if (round >= 5 && playerCurrentScore > computerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The player wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        }else if (round >= 5 && computerCurrentScore > playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "Game Over! The computer wins!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        } else if (round >= 5 && computerCurrentScore == playerCurrentScore) {
            selection.appendChild(gameEnd);
            gameEnd.textContent = "The game was a draw!"
            outcome.classList.add('suspenseOut')
            computerChoice.classList.add('suspenseOut')
            document.querySelector('.container').style.display = 'none';
        }

    }else if (player == computer) {
      outcome.textContent = "This round was a draw. Try again";
      round ++;
      selection.appendChild(outcome);
      computerChoice.classList.add('suspense2');
      outcome.classList.add('suspense');
      currentRound.textContent = round;
      if (round >= 5 && playerCurrentScore > computerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "Game Over! The player wins!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      }else if (round >= 5 && computerCurrentScore > playerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "Game Over! The computer wins!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      } else if (round >= 5 && computerCurrentScore == playerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "The game was a draw!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      }

    }else {
      outcome.textContent = "You lose! " + computer + " beats " + player + ".";
      computerCurrentScore ++;
      round ++;
      selection.appendChild(outcome);
      computerChoice.classList.add('suspense2');
      outcome.classList.add('suspense');
      currentRound.textContent = round;
      computerScore.textContent = computerCurrentScore;
      if (round >= 5 && playerCurrentScore > computerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "Game Over! The player wins!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      }else if (round >= 5 && computerCurrentScore > playerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "Game Over! The computer wins!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      } else if (round >= 5 && computerCurrentScore == playerCurrentScore) {
          selection.appendChild(gameEnd);
          gameEnd.textContent = "The game was a draw!"
          outcome.classList.add('suspenseOut')
          computerChoice.classList.add('suspenseOut')
          document.querySelector('.container').style.display = 'none';
      }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = button.value;
        computerChoice.textContent = "The computer has selected " + computerSelection + ".";
        selection.appendChild(computerChoice);
        playGame(playerSelection, computerSelection);
        computerSelection = computerPlay();
    });
});

