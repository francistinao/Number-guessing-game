const triesCounter = document.getElementById("tries-count");
const guessNumberBar = document.getElementById("guess-bar");
const submit = document.getElementById("submit");
const tryAgain = document.getElementById("try");
const messageLog = document.getElementById("log");
const guess = document.getElementById("guess");
const playAgain = document.getElementById("play-again");
const play = document.getElementById("yes")
const closeWindow = document.getElementById("no");

let count = 3,
maxNumber = 50, //The max number will be 50 for the user to guess ranging from 1 to 50 only
misteryNumber = Math.ceil(Math.random() * maxNumber); //generates a random number and serves as the mystery number
//Will automatically generate if the user reloads the page
let gameOverDisplayValue = ""
console.log(count)

console.log("Mistery Number: " + misteryNumber)

playAgain.style.display = "none" //The play again div is hidden until the user won or out of guesses

//This function will convert the inputted value from the guess-bar to a number
const guessNumberFromBar = () => {
    const number = Number(guessNumberBar.value);
    console.log(`My number is ${number}`)

    return number;
}

//If the user do not want to play again, the tab will close
closeWindow.addEventListener("click", () => {
    window.close();
})

submit.addEventListener("click", () => {
   numberChecker(misteryNumber,gameOverDisplayValue,count) 
})

const numberChecker = (misteryNumber,gameOverDisplayValue,count) => {
    myNumber = guessNumberFromBar()
    //A lot of bugs when using loop huhu
    //Same as using recursion
    while(count >= 0) {
        if(myNumber != misteryNumber) {
            if(myNumber < misteryNumber) {
                messageLog.innerText = `Your number, ${myNumber} is less than the mistery number`
            } else {
                messageLog.innerText = `Your number, ${myNumber} is greater than the mistery number`
            }
            tryAgain.innerText = "Try Again"
            count--
        } else {
            gameOverDisplayValue = "YOU WON"
            gameOverDisplay(gameOverDisplayValue)
            break
        }
        triesCounter.innerText = `${count}`
    }
    // gameOverDisplayValue = "YOU LOSE"
    // gameOverDisplay(gameOverDisplayValue)
}

const gameOverDisplay = (gameOverDisplayValue) => {
    guessNumberBar.disabled = true //if the user won, he/she cannot be  able to input a number anymore
    playAgain.style.display = "block" //The div will be visible
    messageLog.innerText = `${gameOverDisplayValue}`
    tryAgain.innerText = ""
}

play.addEventListener("click", () => {
    misteryNumber = Math.ceil(Math.random() * maxNumber);
    console.log("Mistery Number: " + misteryNumber)
    playAgainTrigger(count)
})

//function for the user to play again
const playAgainTrigger = (count) => {
    count = 3
    triesCounter.innerText = `${count}`
    guessNumberBar.disabled = false
    messageLog.innerText = `Enter a number to guess...`
    playAgain.style.display = "none"
    guessNumberBar.value = ""
}