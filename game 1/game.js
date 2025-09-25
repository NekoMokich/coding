var board = document.getElementsByClassName('board')[0], //gameboard
player = document.getElementsByClassName('gamer')[0],
element, innerElement,
gamer1 = true, //showing which player is playing rn 
gameTable =[[null, null, null], [null, null, null], [null, null, null]] //game matrics
nullCount = 9, //amounts of moves
winner = null;

player.innerText ='Now X moving';

//generating of game board 

for (var i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick= tableClick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString()); 
    element.appendChild(innerElement);
    board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;

function tableClick() {
    if(this.innerText == ''){
        this.innerText = gamer1 ? 'X' : 'O';
        var y = this.getAttribute('y'), x = this.getAttribute('X');
        gameTable[y][x] = gamer1;
        nullCount--;
        if ((gameTable[y][0] === gamer1 && gameTable[y][1] === gamer1 && gameTable[y][2] === gamer1) ||
            (gameTable[0][x] === gamer1 && gameTable[1][x] === gamer1 && gameTable[2][x] === gamer1) ||
            (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1) ||
            (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
            winner = gamer1;
            }
            gamer1 = !gamer1;
            player.innerText = gamer1 ? 'Now X moving' : 'Now O moving';
            if (nullCount == 0 || winner !== null) {
                if (winner !== null) {
                    if (confirm('Winner ' + (winner ? 'X' : 'O') + '.\nWanna Play Again')) {
                        reset();
                    }
                }
                else if (confirm('Game is over as draw.\nWanna Play Again')) {
                    reset();
                }
            }
    }
    else {
        alert('Invalid Move');
    }
}

function reset() {
    gamer1 =true;
    gameTable = [[null, null, null], [null, null, null], [null, null, null]];
    nullCount = 9;
    winner = null;
    var table = document.getElementsByClassName('inner-cell');
    for (var i = 0; i < table.length; i++) {
        table[i].innerText ='';
    }
    player.innerText = 'Now X moving '
}


//LOL