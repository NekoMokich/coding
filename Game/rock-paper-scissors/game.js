//import libary 
const readlineSync = require('readline-sync');

//Define player class
class Player {
    constructor(name) {
        this.name = name;
        this.choices = null
    }
}  

//define computer player class
class Computer extends Player {
    constructor() {
        super('Computer');
    }   
    //methods for random choice moves for computer
    makeRandomChoice() {
        const randomIndex = Math.floor(Math.random() * options.length);
        this.choices = options[randomIndex];
    }
}

//define main game logic
class RockPaperScissorsGame {
    constructor() {
        this.player = player;
        this.computer = new Computer();
        this.options = ['rock', 'paper', 'scissors'];
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
        const choiceIndex = readlineSync.keyInSelect(this.options, 'Choose your move:');
        
        if (choiceIndex === -1) {
            console.log('Game exited.');
            return;
        }
        this.player.choices = this.options[choiceIndex];
        this.computer.makeRandomChoice(this.choices);

        console.log(`${this.player.name} chose: ${this.player.choices}`);
        console.log(`Computer chose: ${this.computer.choices}`);

        this.determineWinner();
   
    }
    //method to determine the winner
    determineWinner() {
        const playerChoice = this.player.choices;
        const computerChoice = this.computer.choices;

        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        }
    }

}
