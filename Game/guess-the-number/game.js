//improting libaries/modules 
const readLineSync = require('readline-sync')

//Player
class Player {
    constructor(name){
        //constructor for finding player with a name
        this.name = name;
    }
}

//game logics
class GuessTheNumberGame {
    //game settings
    constructor(player) {
        this.player = player;
        this.secretNumber = 0;
        this.maxGuesses = 5;
        this.guessesleft = 0;
    }
    //method for starting the game 
    start(){
        console.log (`Welcome ${this.player.name} to 'Guess the number'!`);
        this.secretNumber = Math.floor(Math.random() * 100) + 1; //Secret number 1-100
        this.guessesleft = this.maxGuesses;
        console.log(`I have selected a number from 1 to 100. You have ${this.maxGuesses} attempts to guess it`);
        this.playRound();

    }
    //Method of round
    playRound() {
        while (this.guessesleft > 0){
        //receive a player guess
        const guess = readLineSync.questionInt('What is your suggest: ');
        const guessNum = parseInt(guess, 10);
        
        //checking what user is wrote
        if (isNaN(guessNum)) {
            console.log('This is not a number,WRITE A NUMBER!!!');
            continue;
        }
        this.guessesleft--;

        //checking a suggestion
        if (guessNum === this.secretNumber) {
            console.log(`Congrats ${this.player.name}, you guessed a number ${this.secretNumber}`);
            return;
        } else if (guessNum < this.secretNumber) {
            console.log('Too low!');
        } else {
            console.log('Too high!');
        }
    }
    console.log(`Do you dont any more attepts,Number was ${this.secretNumber}.You can try again`);
    }    
}
//making function for export of the game 
function runGame(){
    const playerName = readLineSync.question('What is your name:');
    const player = new Player(playerName || 'Gamer');
    const game = new GuessTheNumberGame(player);
    game.start();
}
//Export game function
module.exports = runGame;