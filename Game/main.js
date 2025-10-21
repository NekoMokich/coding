//Импортируем необходимые модули
//import modules

const readLineSync = require('readline-sync');

//Importing game module
const runGuessTheNumber = require('./guess-the-number/game');
const runticTacToe = require('./tic-tac-toe/game');

//Контроллер игрового цикла
//Game loop controller
let keepPlaying = true;

//Основной цикл меню. Будет продолжаться, пока игрок не захочет выйти
//Main menu loop. Will continue until the player wants to exit
while (keepPlaying) {
    console.clear();
    console.log("================================");
    console.log("=      WELCOME TO THE GAME     =");
    console.log("================================");
    console.log("Which game mode do you want to play?");

    const games = [
        'Guess the Number',
        'Tic-Tac-Toe'
    ];    

    

    //showing existing games
    const index = readLineSync.keyInSelect(games,'Choose a game or exit:');

    //deoending on player choose starting the game
    switch (index){
        case 0:
            runGuessTheNumber();
            break;
         case 1:
            runticTacToe();
            break;
    //later we gonna add other games
    default:
        console.log("Exiting the game. Goodbye!");
        keepPlaying = false;
        break;
    }
    //after finishing the game we ask what a player play again
    if (keepPlaying) {
        if (!readLineSync.keyInYN('Do you want to another game?')) {
            keepPlaying = false;
            console.log("Goodbye!");
        }
    }
}
