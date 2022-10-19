//Constants
const startButton=document.querySelector("#wordBoxButton")
const wordBox=document.querySelector(".wordToGuessBox")
// const wordBox=document.querySelector(".eachLetter")
const wordInput=document.querySelector("input")
const letters = document.querySelectorAll(".letter")
const spaceship = document.querySelectorAll(".images")
const spaceship2 = document.querySelectorAll(".images2")
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

// console.log(spaceship)

//Event Listeners
// playAgainButton.addEventListener
startButton.addEventListener("click", startGame)
buildButton.addEventListener("click", buildSpaceship)
letters.forEach((letter)=>letter.addEventListener("click", letterClick))



//Functions
function startGame(event) {
    const word = document.createElement("wordToGuessBox")
    const teacherword = wordInput
    word.innerText=teacherword.value.toUpperCase()
    // wordBox.appendChild(word)
    teacherword.value=""
    
   // shipAway
    let spaceshipParts = Array.from(spaceship)
    spaceshipParts.forEach(function(part){
        part.classList.add("imagehide")
      })

    //Split letters
    // let letters = document.createElement(teacherword)
    // console.log(letters)

    let lettersHide = word.innerText.split("")
    lettersHide.forEach(function(letter){
        
        const letterEl=document.createElement("span")
        letterEl.innerText=letter
        
        wordBox.appendChild(letterEl)
        console.log(wordBox)
        letterEl.classList.add("wordToGuessBoxHide")
    })
    return word.innerText
}



//NEW FUNCTION
function letterClick(event){
    const letter=event.target
    const letterPosition = letter.dataset.index
    letter.classList.add("whiteletters")
    console.log(letter)

    if(letter===wordBox){
        letter.classList.add("wordToGuessBoxReveal")
    }

}

//^COME BACK TO THIS

function buildSpaceship(event){
    let spaceshipParts2 = Array.from(spaceship2)
    spaceshipParts2.forEach(function(part){
        part.classList.add("imageshow")
      })
      }













// function letterClick(event){
//     const letter=event.target
//     const letterPosition = letter.dataset.index
//     const word = document.createElement("wordToGuessBox")
//     const teacherword = wordInput
//     word.innerText=teacherword.value.toUpperCase()
//     teacherword.value=""
//     if(letter.innerText===word.innerText){
//         letter.classList.add("whiteLetters")
//     }
// }

//make query selector all to guesbox regeal. put on araray
        // letter.classList.add("wordToGuessBoxReveal")

