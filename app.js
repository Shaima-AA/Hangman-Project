let word = "";
let guessed = [];   // letters already picked
let lives = 6;

const wordsArray = ["ITALY", "SPAIN", "BAHRAIN", "RICE", "PIZZA", "SUSHI", "CAT", "LION", "DUCK"]
//caching
const startButton = document.querySelector('#start-btn')
const restartButton = document.querySelector('#restart')
const letters = document.querySelectorAll('.letters')
const hearts = document.querySelectorAll('.heart')
const wordDisplay = document.querySelector('#word-display')
const hintMessage = document.querySelector('#hint')

console.log(startButton)
console.log(restartButton)
console.log(letters)
console.log(hearts)

//functions
function startGame() {
    lives = 6;
    guessed = []
    // ...reset lives, pick the word, reset buttons and hearts...

    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    word = wordsArray[randomIndex];
    console.log(word)

    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = false
        letters[i].classList.remove("green", "red")
    }
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].style.visibility = "visible";
    }

    //blanks
    wordDisplay.innerHTML = ""; //clear 

    for (let i = 0; i < word.length; i++) {
        const blank = document.createElement('span');
        blank.dataset.letter = word[i];
        wordDisplay.appendChild(blank);
    }
    hintMessage.innerHTML = "";
    const showHint = document.createElement('p');

    if (["ITALY", "SPAIN", "BAHRAIN"].includes(word)) {
        showHint.textContent = "Hint: Country";
    } else if (["RICE", "PIZZA", "SUSHI"].includes(word)) {
        showHint.textContent = "Hint: Food";
    } else {
        showHint.textContent = "Hint: Animal";
    }

    hintMessage.appendChild(showHint);
}




//Event Listner
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
