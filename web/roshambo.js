var activePlayer = -1;
var playerMoves = [];

function changePlayer(){
    activePlayer = (activePlayer + 1) % 2;
    $( "h1.activePlayer" ).html("It's player " + (activePlayer + 1) + "'s turn!");
}

function checkForWinner(){
    if( playerMoves.length === 2 ){
        alert( "? wins!" );
        playerMoves = [];
    }
}

function play(moveName) {
    playerMoves[activePlayer] = moveName;
    checkForWinner();
    changePlayer();
    $( "button.rock" ).focus();
}