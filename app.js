let randomWord = "";
let guessed = [];   // letters already picked
let mistakeNo = 0;
const wordsArray = ["ITALY", "SPAIN", "BAHRAIN", "RICE", "PIZZA", "SUSHI", "CAT", "LION", "DUCK"]
//caching
const startButton = document.querySelector('#start-btn')
const restartButton = document.querySelector('#restart')
const letters = document.querySelectorAll('.letters')
const wordDisplay = document.querySelector('#word-display')
const hintMessage = document.querySelector('#hint')
const fullBody = document.querySelector('#img')

console.log(startButton)
console.log(restartButton)
console.log(letters)
console.log(hearts)

//functions
function startGame() {
    lives = 6;
    guessed = []
    // ...reset lives, pick the word, reset buttons and hearts...
    fullBody.src= "./body parts/gallows-only.png"
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    randomWord = wordsArray[randomIndex];//chooses randomly a word from the wordsArray array
    console.log(randomWord)

    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = false
        letters[i].classList.remove("green", "red")
    }
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].style.visibility = "visible";
    }

    //blanks
    let blanks = wordDisplay
    wordDisplay.innerHTML = ""; //clear 

    for (let i = 0; i < randomWord.length; i++) {
        const blank = document.createElement('span');
        blank.dataset.letter = randomWord[i];
        wordDisplay.appendChild(blank);
    }
    hintMessage.innerHTML = "";
    const showHint = document.createElement('p');

    if (["ITALY", "SPAIN", "BAHRAIN"].includes(randomWord)) {
        showHint.textContent = "Hint: Country";
    } else if (["RICE", "PIZZA", "SUSHI"].includes(randomWord)) {
        showHint.textContent = "Hint: Food";
    } else {
        showHint.textContent = "Hint: Animal";
    }

    hintMessage.appendChild(showHint);


}

function lettersChoosing(event) {
    let clickedLetter = event.target.textContent
    const Blanks = wordDisplay.querySelectorAll('span');   // the individual blanks
    let found = false; 

 

    for (let i = 0; i < randomWord.length; i++) {
        
        if (clickedLetter === randomWord[i]) {
            Blanks[i].textContent = clickedLetter;   // only blank number i
            event.target.style.visibility = 'hidden'
            found = true;
            return found;
        } 
        
        

}}













//Event Listner
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', lettersChoosing)
}

