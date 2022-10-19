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
const playAgainButton = document.querySelector(".byebyeAlien")

// console.log(spaceship)

//Event Listeners
// playAgainButton.addEventListener
startButton.addEventListener("click", startGame)
buildButton.addEventListener("click", buildSpaceship)
letters.forEach((letter)=>letter.addEventListener("click", letterClick))
playAgainButton.addEventListener("click", resetGame)



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
        // console.log(wordBox)
        letterEl.classList.add("wordToGuessBoxHide")
    })
}



//Check letter function
function letterClick(event){
    const letter=event.target
    const letterPosition = letter.dataset.index
    letter.classList.add("whiteletters")
    console.log(wordBox)

    if(letter===wordBox){
        letter.classList.add("wordToGuessBoxReveal")
    }

}
//^COME BACK TO THIS



//Build spaceship function:
let i=0
function buildSpaceship(){
    let spaceshipParts2 = Array.from(spaceship2)
        spaceshipParts2[i].classList.add("imageshow")
        i++
        console.log(i)
      }


//Reset Game function
function resetGame(){
    location.reload()
}
//ask emily:
//how to make these images correspond to each cluck

//for the letters, how can i get word.innertext to be in global scope.





//while (i <spaceshipParts2.length){
//if(i=10, stop remove event AudioListener.)


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



        //make a div that says you lose or you win and then if i want, display something. 
        //if you lose