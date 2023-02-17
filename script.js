let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = []
let level = 1
let started = false

// selecting colors and pattern

// keypress event to start the game
document.addEventListener("keypress", function () {
    if (!started) {
        document.querySelector("h1").innerHTML = `Level ${level}`;
        NextSequence();
        started = true;
    }
})



// adding click event in the buttons 


let redColor = document.querySelector("#red")
let blueColor = document.querySelector("#blue")
let yellowColor = document.querySelector("#yellow")
let greenColor = document.querySelector("#green")

document.addEventListener("click", function (event) {

    if (redColor.contains(event.target)) {
        let userChosenColour = "red"
        userClickedPattern.push(userChosenColour)
        checkAnswer(userClickedPattern.length-1)

        let colorClickedSound = new Audio(`sounds/red.mp3`);
        colorClickedSound.play()

        redColor.classList.add("pressed")
        setTimeout(function () {
            redColor.classList.remove("pressed");
        }, 100);


    } else if (greenColor.contains(event.target)) {
        let userChosenColour = "green"
        userClickedPattern.push(userChosenColour)
        checkAnswer(userClickedPattern.length-1)

        let colorClickedSound = new Audio(`sounds/green.mp3`);
        colorClickedSound.play()

        greenColor.classList.add("pressed")
        setTimeout(function () {
            greenColor.classList.remove("pressed");
        }, 100);


    } else if (yellowColor.contains(event.target)) {
        let userChosenColour = "yellow"
        userClickedPattern.push(userChosenColour)
        checkAnswer(userClickedPattern.length-1)

        let colorClickedSound = new Audio(`sounds/yellow.mp3`);
        colorClickedSound.play()

        yellowColor.classList.add("pressed")
        setTimeout(function () {
            yellowColor.classList.remove("pressed");
        }, 100);


    } else if (blueColor.contains(event.target)) {
        let userChosenColour = "blue"
        userClickedPattern.push(userChosenColour)
        checkAnswer(userClickedPattern.length-1)

        let colorClickedSound = new Audio(`sounds/blue.mp3`);
        colorClickedSound.play()

        blueColor.classList.add("pressed")
        setTimeout(function () {
            blueColor.classList.remove("pressed");
        }, 100);

    }
})

// function if the answers check and shows de game over display
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            NextSequence()
        }, 1000)


    }} else {
        let colorSound = new Audio(`sounds/wrong.mp3`);
        colorSound.play()
        let wrongDisplay = document.querySelector("body")
        wrongDisplay.classList.add("game-over")
        document.querySelector("#level-title").innerHTML = "Game over, press any Key to restart"

        setTimeout(function () {
            wrongDisplay.classList.remove("game-over")
        }, 1000)

        startOver()
    }
}


function NextSequence() {
    userClickedPattern = []
    level++
    document.querySelector("h1").innerHTML = `Level ${level}`;
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)



    function btnSound() {
        let colorSound = new Audio(`sounds/${randomChosenColor}.mp3`);
        colorSound.play()
    }

    function buttonAnimation() {
        let colorBtn = document.querySelector("#" + randomChosenColor);
        colorBtn.classList.add("pressed")

        setTimeout(function () {
            colorBtn.classList.remove("pressed");
        }, 100);

    }

    return (buttonAnimation(), btnSound())
}

function startOver() {
    level = 0;
    gamePattern = []
    started = false
}
