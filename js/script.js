
var leftSpan = document.querySelector('#p1-score');
var rightSpan = document.querySelector('#p2-score');

 // playing to
var numOfGames = document.querySelector('#num-of-games');

var inputGames = document.querySelector('#input-num-of-games'); // linked to playing to
var p1Btn = document.querySelector('#p1-btn');
var p2Btn = document.querySelector('#p2-btn');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

var resetBtn = document.querySelector('#reset-btn');

// Player One button
p1Btn.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            leftSpan.classList.add("winner");
            console.log("Game Over. Player One won");
        }
    }
    leftSpan.textContent = p1Score;

});

// Player Two button
p2Btn.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            rightSpan.classList.add("winner");
            gameOver = true;
            console.log("Game Over. Player Two won");
        }
    }
    rightSpan.textContent = p2Score;
});

// reset button
resetBtn.addEventListener('click', function() {
    reset();
});

// lets reset the game to 0 when the score is greater than the maximum score or when input is changed in the middle of the count
function reset() {
    p1Score = 0;
    p2Score = 0;
    leftSpan.textContent = 0;
    rightSpan.textContent = 0;
    leftSpan.classList.remove("winner");
    rightSpan.classList.remove("winner");
    gameOver = false; // to get the game running again after hitting reset button
}

// lets get the input working and showing up after playing to:
// click event is no good for input. The 'change' event is better to use for inputs
inputGames.addEventListener('change', function() {
    numOfGames.textContent = this.value;
    winningScore = Number(this.value); // this is returning as a string so lets change it to number datatype
    reset();
});
