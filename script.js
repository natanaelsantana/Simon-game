let userClickedPattern = []
// selecting colors and pattern
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
gamePattern.push(nextSequence, buttonAnimation, btnSound)

// everything start with this function
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    return (randomChosenColor)
}

function btnSound () {
let colorSound = new Audio(`sounds/${nextSequence()}.mp3`);
colorSound.play()
}



// Making press animation
function buttonAnimation() {
    let colorBtn = document.querySelector("#" + nextSequence());
    colorBtn.classList.add("pressed")

    setTimeout(function () {
        colorBtn.classList.remove("pressed");
    }, 100);

}


 // adding click event in the buttons 

let redColor = document.querySelector("#red")
let blueColor = document.querySelector("#blue")
let yellowColor = document.querySelector("#yellow")
let greenColor = document.querySelector("#green")

document.addEventListener("click", function (event) {

    if (redColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

    } else if (greenColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

    } else if (yellowColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)

    } else if (blueColor.contains(event.target)) {
        let userChosenColour = event.target
        userClickedPattern.push(userChosenColour)
    }

})


// start game at a random click

document.addEventListener("click", nextSequence())