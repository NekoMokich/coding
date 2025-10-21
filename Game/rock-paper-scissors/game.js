//import libary 
const readlineSync = require('readline-sync');

//Define player class
class Player {
    constructor(name) {
        this.name = name;
        this.choice = null
    }
}  

//define computer player class
class Computer extends Player {
    constructor() {
        super('Computer');
    }   
    //methods for random choice moves for computer
    makeRandomChoice(options) {
        const randomIndex = Math.floor(Math.random() * options.length);
        this.choice = options[randomIndex];
    }
}

//define main game logic
class RockPaperScissorsGame {
    constructor(player) {
        this.player = player;
        this.computer = new Computer();
        this.choices = ['rock', 'paper', 'scissors'];
        this.rules = {
            rock: 'scissors',// rock beats scissors
            paper: 'rock',// paper beats rock
            scissors: 'paper'// scissors beats paper
        };
    }
    //method to start the game
    start() {
        console.log(`Welcome ${this.player.name} to Rock-Paper-Scissors Game!`);
        this.playRound();
    
    }
    //method to play one round
    playRound() {
        const choiceIndex = readlineSync.keyInSelect(this.choices,'choose your move:');
        
        if (choiceIndex === -1) {
            console.log('Game exited.');
            return;
        }
        this.player.choice = this.choices[choiceIndex];
        this.computer.makeRandomChoice(this.choices);

        console.log(`${this.player.name} chose: ${this.player.choice}`);
        console.log(`Computer chose: ${this.computer.choice}`);

        this.determineWinner();
   
    }
    //method to determine the winner
    determineWinner() {
        const playerChoice = this.player.choice;
        const computerChoice = this.computer.choice;

        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (this.rules[playerChoice] === computerChoice) {
            console.log(`${this.player.name} wins!`);
        } else {
            console.log('Computer wins!');
        }
    }

}
//creating fuction to import game
function runGame() {
    const playerName = readlineSync.question('Enter your name: ');
    const player = new Player(playerName || 'Player');
    const game = new RockPaperScissorsGame(player);
    game.start();
}
module.exports = runGame;


