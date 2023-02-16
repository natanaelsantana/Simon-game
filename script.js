let level = 1
let started = false

// selecting colors and pattern

let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = []


document.addEventListener("keypress", function () {
    if (!started) {
        document.querySelector("h1").innerHTML = `Level ${level}`;
        NextSequence();
        started = true;
    }
})

// everything start with this function
function NextSequence() {
    userClickedPattern
    level++
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



// Making press animation


// adding click event in the buttons 


let redColor = document.querySelector("#red")
let blueColor = document.querySelector("#blue")
let yellowColor = document.querySelector("#yellow")
let greenColor = document.querySelector("#green")

document.addEventListener("click", function (event) {


    if (redColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

        let colorClickedSound = new Audio(`sounds/red.mp3`);
        colorClickedSound.play()

        let colorBtn = userChosenColour;
        colorBtn.classList.add("pressed")
        setTimeout(function () {
            colorBtn.classList.remove("pressed");
        }, 100);
        checkAnswer(userClickedPattern.length - 1)

    } else if (greenColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

        let colorClickedSound = new Audio(`sounds/green.mp3`);
        colorClickedSound.play()

        let colorBtn = userChosenColour;
        colorBtn.classList.add("pressed")
        setTimeout(function () {
            colorBtn.classList.remove("pressed");
        }, 100);
        checkAnswer(userClickedPattern.length - 1)

    } else if (yellowColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

        let colorClickedSound = new Audio(`sounds/yellow.mp3`);
        colorClickedSound.play()

        let colorBtn = userChosenColour;
        colorBtn.classList.add("pressed")
        setTimeout(function () {
            colorBtn.classList.remove("pressed");
        }, 100);

        checkAnswer(userClickedPattern.length - 1)
    } else if (blueColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

        let colorClickedSound = new Audio(`sounds/blue.mp3`);
        colorClickedSound.play()

        let colorBtn = userChosenColour;
        colorBtn.classList.add("pressed")
        setTimeout(function () {
            colorBtn.classList.remove("pressed");
        }, 100);
        checkAnswer(userClickedPattern.length - 1)
    }

})


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            NextSequence()
        }
    } else {
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

function startOver() {
    level = 1;
    gamePattern = [];
    started = false
}
