//CONSTANTS
const startButton = document.querySelector("#wordBoxButton")
const wordBox = document.querySelector(".wordToGuessBox")
const wordInput = document.querySelector("input")
const letters = document.querySelectorAll(".letter")
const spaceship = document.querySelectorAll(".images")
const spaceship2 = document.querySelectorAll(".images2")
const alien = document.querySelector("#alien")
const buildButton = document.querySelector(".buildButton")
const loseButton = document.querySelector(".byebyeAlien")
const winButton = document.querySelector(".winner")

//EVENT LISTENERS
startButton.addEventListener("click", startGame)
buildButton.addEventListener("click", buildSpaceship)
letters.forEach((letter) => letter.addEventListener("click", letterClick))
loseButton.addEventListener("click", resetGame)
winButton.addEventListener("click", resetGame)

//FUNCTIONS
//Function: Starts the game
let wordsEntered = []
function startGame(event) {
    //Input word to guess:
    const word = document.createElement("wordToGuessBox")
    const teacherword = wordInput
    word.innerText = teacherword.value.toUpperCase()
    teacherword.value = ""
    wordsEntered = word.innerText.split("")
    //Make spaceship disappear:
    let spaceshipParts = Array.from(spaceship)
    spaceshipParts.forEach(function (part) {
        part.classList.add("imagehide")
    })
    //Split word to guess into individual boxes:
    let lettersHide = word.innerText.split("")
    lettersHide.forEach(function (letter) {
        const letterEl = document.createElement("span")
        letterEl.innerText = letter
        wordBox.appendChild(letterEl)
        letterEl.classList.add("wordToGuessBoxHide")
    })
}

//Function: Clicks on letters to make a guess and compare it to word input
let lettersclicked = []
function letterClick(event) {
    //Compare letter clicked to word to guess letters:
    const letter = event.target
    const letterclicked = letter.dataset.index
    const letterEls = document.querySelectorAll('.wordToGuessBox > span')
    for (var n = 0; n < letterEls.length; n++) {
        if (letterEls[n].innerText === letterclicked) {
            letterEls[n].classList.add('wordToGuessBoxReveal')
            lettersclicked.push(letterEls[n].innerText)
            if (lettersclicked.length == wordsEntered.length === true) {
                winButton.classList.add("winnerShow")
            }
        }
        //Make letters clicked turn white:
        letter.classList.add("whiteletters")
    }
}

//Function: make spaceship parts appear one by one:
let i = 0
function buildSpaceship() {
    let spaceshipParts2 = Array.from(spaceship2)
    spaceshipParts2[i].classList.add("imageshow")
    i++
}

//Function: reset the game:
function resetGame() {
    location.reload()
}