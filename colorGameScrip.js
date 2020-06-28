var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector(".resetGameButton");
var easyButton = document.querySelector(".easyButton");
var hardButton = document.querySelector(".hardButton");
var mode = true; //hard = true, easy = false

function getRandomColor() {
    var r = Math.floor(Math.random() * Math.floor(255));
    var g = Math.floor(Math.random() * Math.floor(255));
    var b = Math.floor(Math.random() * Math.floor(255));
    return "rgb(" + r +", " + g + ", " + b + ")"
    //works!!! return "rgb(255, 0, 255)"
  }

function changeAllSquares(squares, ans){
    if(mode){
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = ans
        }
    }
    else {
        for(var i = 0; i < squares.length-3; i++){
            squares[i].style.backgroundColor = ans
        }
    }
    h1.style.backgroundColor = ans;
}

function easyMode(){
    mode = false;
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    for(var j = 5; j > 2; j--){
        console.log(j);
        squares[j].style.backgroundColor = "#232223";
    }
    message.textContent = "";
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "#5183B4";
    for(var i = 0; i < squares.length-3; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
    guessSquare = squares[Math.floor(Math.random() * Math.floor(2))].style.backgroundColor;
    colorDisplay.textContent = guessSquare;   
}

function hardMode(){
    mode = true;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    message.textContent = "";
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "#5183B4";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
    guessSquare = squares[Math.floor(Math.random() * Math.floor(5))].style.backgroundColor;
    colorDisplay.textContent = guessSquare;   
}

function resetGame(){
    message.textContent = "";
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "#5183B4";
    if(mode){
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = getRandomColor();
        }
        guessSquare = squares[Math.floor(Math.random() * Math.floor(5))].style.backgroundColor;
        colorDisplay.textContent = guessSquare;
    }
    else {
        for(var i = 0; i < squares.length-3; i++){
            squares[i].style.backgroundColor = getRandomColor();
        }
        guessSquare = squares[Math.floor(Math.random() * Math.floor(2))].style.backgroundColor;
        colorDisplay.textContent = guessSquare;
    }
}

var guess = "";
var message = document.getElementById("message");

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = getRandomColor();
    squares[i].addEventListener("click", function(){
        guess = this.style.backgroundColor;
        console.log("you guessed: " + guess);
        if(guess == guessSquare){
            message.textContent = "Correct!"
            changeAllSquares(squares, guessSquare);
            resetButton.textContent = "Play Again";
                
        }
        else {
            this.style.backgroundColor = "#232223"
            message.textContent = "Try again";
        }
    })

}

var guessSquare = squares[Math.floor(Math.random() * Math.floor(5))].style.backgroundColor;
//console.log(squareStyles)

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = guessSquare 
console.log(guessSquare);


