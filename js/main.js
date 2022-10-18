const startButton=document.querySelector("#wordBoxButton")
const wordBox=document.querySelector("#wordToGuessBox")

startButton.addEventListener("click", function (event) {
    const word = document.createElement("wordToGuessBox")
    const teacherword = document.querySelector("input")
    console.log(teacherword.value)

    word.innerText=teacherword.value
    wordBox.appendChild(word)
    teacherword.value=""
})