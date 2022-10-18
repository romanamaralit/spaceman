//Constants
const startButton=document.querySelector("#wordBoxButton")
const wordBox=document.querySelector("#wordToGuessBox")
const wordInput=document.querySelector("input")
const letters = document.querySelectorAll(".grayletter")
const spaceship = document.querySelectorAll(".imageshow")
const alien = document.querySelector("#alien")
const ring = document.querySelector("#ring")
const engine1 = document.querySelector("#engine1")
const engine2 = document.querySelector("#engine2")
const engine3 = document.querySelector("#engine")
const dome = document.querySelector("#dome")
const window1 = document.querySelector("#window1")
const window2 = document.querySelector("#window2")
const window3 = document.querySelector("#window3")
const antenna = document.querySelector("#antenna")
const buildButton = document.querySelector(".buildButton")
// const playAgainButton = play again button

console.log(letters)

//Event Listeners
// playAgainButton.addEventListener
startButton.addEventListener("click", startGame)
buildButton.addEventListener("click", buildButton)



//Functions
function startGame(event) {
    const word = document.createElement("wordToGuessBox")
    const teacherword = wordInput
    word.innerText=teacherword.value
    wordBox.appendChild(word)
    teacherword.value=""

    shipAway(event.target)
    
    }
 function shipAway(spaceship){
    spaceship.classList.add("imagehide")
 }