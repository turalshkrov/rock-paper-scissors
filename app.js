const buttons = [...$('.btn')];
const playAgainBtn = $('#play-again')[0];
const playerSign = $('#player-sign')[0];
const computerSign = $('#computer-sign')[0];
const resultLabel = $('#result')[0];
const rulesLabel = $('#rules')[0];
const playerScoreLabel = $('#player-score')[0];
const computerScoreLabel = $('#computer-score')[0];
const winnerLabel = $('#winner')[0];

const choices = ['rock', 'paper', 'scissors'];
let playerChoise;
let computerChoise;

let playerScore = 0;
let computerScore = 0;

const scoreUpdate = () => {
    playerScoreLabel.innerText = `Player: ${playerScore}`;
    computerScoreLabel.innerText = `Computer: ${computerScore}`;
}

const winnerCheck = () => {
    if (playerScore === 5 || computerScore === 5) {
        winnerLabel.innerText = 
            playerScore === 5 ? 'Winner: Player'
            : 'Winner: Computer'

        playAgainBtn.disabled = false;
        
        buttons.map(btn => {
            btn.disabled = true;
        });
    }
    
}

const playAgain = (e) => {
    playerScore = 0;
    computerScore = 0;
    scoreUpdate();
    
    buttons.map(btn => {
        btn.disabled = false;
    });

    playAgainBtn.disabled = true;

    resultLabel.innerText = 'Choose Your Weapon';
    rulesLabel.innerText = 'First to score 5 points wins the game';

    winnerLabel.innerText = 'Winner: '
}

const playRpund = (playerChoise, computerChoise) => {
    if (playerChoise === 'rock') {
        if (computerChoise === 'rock') {
            resultLabel.innerText = 'It\'s a tie!';
            rulesLabel.innerText = 'Rock ties with rock';
        } else if(computerChoise === 'paper') {
            resultLabel.innerText = 'You lost!'
            rulesLabel.innerText = 'Rock is beaten by paper';
            computerScore ++;
        } else {
            resultLabel.innerText = 'You won!'
            rulesLabel.innerText = 'Rock beats scissors';
            playerScore ++;
        }
    } else if(playerChoise === 'paper') {
        if (computerChoise === 'rock') {
            resultLabel.innerText = 'You won!';
            rulesLabel.innerText = 'Paper beats rock';
            playerScore ++;
        } else if(computerChoise === 'paper') {
            resultLabel.innerText = 'It\'s a tie!';
            rulesLabel.innerText = 'Paper ties with paper';
        } else {
            resultLabel.innerText = 'You lost!';
            rulesLabel.innerText = 'Paper beaten by scissors';
            computerScore ++;
        }
    } else {
        if (computerChoise === 'rock') {
            resultLabel.innerText = 'You lost!';
            rulesLabel.innerText = 'Scissors beaten by rock';
            computerScore ++;
        } else if(computerChoise === 'paper') {
            resultLabel.innerText = 'You won!';
            rulesLabel.innerText = 'Scissors beats paper';
            playerScore ++;
        } else {
            resultLabel.innerText = 'It\'s a tie!';
            rulesLabel.innerText = 'Scissors ties with scissors';
        }
    }

    scoreUpdate();
    winnerCheck();
}

const handleClick = (e) => {
    playerSign.innerText = e.target.innerText;

    playerChoise = e.target.className === 'btn'
    ? e.target.id
    : e.target.parentElement.id
    
    computerChoise = choices[Math.floor(Math.random() * 3)];

    computerSign.innerText = 
    computerChoise === 'rock' ? '✊'
    : computerChoise === 'paper' ? '✋'
    : '✌'

    playRpund(playerChoise, computerChoise);
}

buttons.map(btn => {
    btn.addEventListener('click', (e) => handleClick(e));
});

playAgainBtn.addEventListener('click', (e) => playAgain(e))