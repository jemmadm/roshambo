var activePlayer = 0;
var player1Move = null;
var player2Move = null;
var count = 0;
var player1Winner = null;
var player2Winner = null;

function changePlayer() {
    activePlayer = activePlayer % 2 + 1;
    document.getElementById("activePlayer").innerHTML =
        "It's player " + activePlayer + "'s turn!";
}

function checkForWinner() {
    if (player1Move && player2Move) {
        if (player1Move === 'paper' && player2Move === 'rock' ||
            player1Move === 'rock' && player2Move === 'scissors' ||
            player1Move === 'scissors' && player2Move === 'paper' ||
            player1Move === 'lizard' && player2Move === 'spock' ||
            player1Move === 'lizard' && player2Move === 'paper' ||
            player1Move === 'spock' && player2Move === 'scissors' ||
            player1Move === 'spock' && player2Move === 'rock' ||
            player1Move === 'scissors' && player2Move === 'lizard' ||
            player1Move === 'rock' && player2Move === 'lizard' ||
            player1Move === 'paper' && player2Move === 'spock'
        ) {
            document.getElementById("winner").innerHTML = "Player 1 wins";
            player1Winner += 1;
            resetGame();
        } else if (player1Move === player2Move) {
            document.getElementById("winner").innerHTML = "It's a draw";
            resetGame()
        } else {
            document.getElementById("winner").innerHTML = "Player 2 wins";
            player2Winner += 1;
            resetGame()
        }
    }
}

function resetGame() {
    player1Move = null;
    player2Move = null;
}

function play(moveName) {

    if (activePlayer === 1) {
        player1Move = moveName;
    } else {
        player2Move = moveName;
    }
    count++;
    checkForWinner();
    changePlayer();

    if (count === 6) {
        checkFinalWinner();
    }
}

function checkFinalWinner() {

    if (player1Winner > player2Winner) {
        document.getElementById("finalWinner").innerHTML = "The final winner is Player 1";
    } else if (player1Winner === player2Winner) {
        document.getElementById("finalWinner").innerHTML = "Final winner: It's a draw";
    } else {
        document.getElementById("finalWinner").innerHTML = "The final winner is Player 2";
    }
    count = 0;
    resetGame();
}