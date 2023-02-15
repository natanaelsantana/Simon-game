userClickedPattern = []
// selecting colors and pattern
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
gamePattern.push(nextSequence, buttonAnimation())


function nextSequence() {
    let randomNumber= Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    return (randomChosenColor)
}


    let colorSound = new Audio(`sounds/${nextSequence}.mp3`);
    colorSound.play



// Making press animation
function buttonAnimation () {
    let colorBtn =  document.querySelector("#"+ nextSequence());
    colorBtn.classList.add("pressed")
    
    setTimeout(function() {
     colorBtn.classList.remove("pressed");
    }, 100);
 
 }

 let containingElement = document.querySelectorAll("#green", "#red", "#blue", "#yellow");

document.addEventListener("click",  function (event) {
    
    if(containingElement.contains(event.target)) {
        let userChosenColour = event.target
        return console.log(userChosenColour)
    } else {
        let userChosenColour = ""

    }

})

 // adding click event in the buttons 

