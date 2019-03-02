//variable to keep track of mode
var numOfSquares = 6; 
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".display-5");
colorDisplay.textContent = pickedColor;
var msgDisplay = document.querySelector("#message");
var jumbo = document.querySelector(".jumbotron");
var modeButtons = document.querySelectorAll(".mode"); 
var resetButton = document.querySelector("#newColors"); 

init();

 function init() {
     //mode buttons eventliteners
    setUpModeButtons();
    reset();
    squareColoring();
 }


function setUpModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected"); 
                this.classList.add("selected");
    
                //figure out how many squares to show
                //pick new colours
                //pick a new pickedColor
                //update page to reflect changes
    this.textContent === "EASY" ? numOfSquares = 3: numOfSquares = 6;
                reset();
        });
    }
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    msgDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    jumbo.style.backgroundColor = "#c3cddd";     
}


resetButton.addEventListener("click",function(){
       reset();
});


function changeColors(color) {
    for(var j = 0 ; j < squares.length; j++)
    {
        squares[j].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array 
    for(var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
     //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
     //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);    
     //pick a "green" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    //rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
    }

function squareColoring() {
    //var squares = document.querySelectorAll(".square");

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    
        squares[i].addEventListener("click",function(){
            
            // alert(colors[i]); why this didnt work ? why it didnt give rgb from array in alert  
             var clickedColor = this.style.backgroundColor;
             if(clickedColor === pickedColor) {
                msgDisplay.textContent = "CORRECT!"; 
                msgDisplay.style.color = "black";
               changeColors(clickedColor);
               jumbo.style.backgroundColor = clickedColor;
               resetButton.textContent = "PLAY AGAIN!";   
             }
             else {
             this.style.backgroundColor = "#232323";
             msgDisplay.textContent = "TRY AGAIN!"; 
             msgDisplay.style.color = "black";
            }
    
        }); 
    }
}