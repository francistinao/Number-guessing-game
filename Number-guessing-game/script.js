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

const click = () => {
    submit.addEventListener("click", () => {
        numberChecker(misteryNumber,gameOverDisplayValue,count) 
    })
}

const decreaseCounter = () => {
    if(count > -1) {
        count--
        tryAgain.innerText = "Try Again"
    }
    if(count <= 0) {
        gameOverDisplayValue = "YOU LOSE"
        gameOverDisplay(gameOverDisplayValue)
    }
    console.log(count)
    triesCounter.innerHTML = count
}

const numberChecker = (misteryNumber,gameOverDisplayValue,count) => {
    myNumber = guessNumberFromBar()

        if(myNumber != misteryNumber) {
            if(myNumber < misteryNumber) {
                messageLog.innerText = `Your number, ${myNumber} is less than the mistery number`
            } else {
                messageLog.innerText = `Your number, ${myNumber} is greater than the mistery number`
            }
            decreaseCounter()
        } else {
            gameOverDisplayValue = "YOU WON"
            gameOverDisplay(gameOverDisplayValue)
        }
}

const gameOverDisplay = (gameOverDisplayValue) => {
    tryAgain.innerText = ""
    submit.disabled = true;
    guessNumberBar.disabled = true //if the user won, he/she cannot be  able to input a number anymore
    playAgain.style.display = "block" //The div will be visible
    messageLog.innerText = `${gameOverDisplayValue}`
}

play.addEventListener("click", () => {
    misteryNumber = Math.ceil(Math.random() * maxNumber);
    console.log("Mistery Number: " + misteryNumber)
    playAgainTrigger(count)
})

//function for the user to play again
const playAgainTrigger = () => {
    count = 3
    submit.disabled = false
    triesCounter.innerText = `${count}`
    guessNumberBar.disabled = false
    messageLog.innerText = `Enter a number to guess...`
    tryAgain.innerText = ""
    playAgain.style.display = "none"
    guessNumberBar.value = ""
}

click()
