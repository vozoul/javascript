// you can write js here
console.log('exo-3');

var userChoice;
var computerChoice;

var userInput = prompt('Rock / Paper / Scissors' );

var getUserChoice = (inputUser) => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb'){
        return userChoice = userInput.toLowerCase();
    }else{
        window.alert('je n\'ai pas compris votre choix');
        window.location.reload();
    }
};

// getUserChoice();

function getComputerChoice(){
    var num = Math.floor(Math.random(0, 2));
    if(num === 0){
        return computerChoice = 'rock';
    }else if (num === 1){
        return computerChoice = 'paper'
    }else{
        return computerChoice = 'scissors';
    }
};

function replay() {
    var rep = prompt('do you want to replay ? ( Yes/No )');
    if (rep === 'yes' || rep === 'y' || rep === 'Y'){
        window.location.reload();
    }else{
        window.alert('Thanks for playing with me, see you soon');
    }
};

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        window.alert('Tied');
        window.location.reload();
    }else if (userChoice !== computerChoice){
        if (userChoice === 'bomb') {
            window.alert('computer played : ' + computerChoice + ', You win !');
        }else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
            window.alert('computer played : ' + computerChoice + ', You win !');
        }else{
            window.alert('computer win with : ' + computerChoice);
        }
        replay();
    }
};

function playGame(){
    var uChoice = getUserChoice();
    var cChoice = getComputerChoice();
    determineWinner(uChoice, cChoice);
};

playGame();