let randomWord = "";
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
    randomWord = wordsArray[randomIndex];//chooses randomly a word from the wordsArray array
    console.log(randomWord)

    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = false
        letters[i].classList.remove("green", "red")
    }
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].style.visibility = "visible";
    }
let blanks = wordDisplay
    //blanks
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

    function lettersChoosing(event){
       let chooseLetter = event.target.textContent
        for(let i=0; i<randomWord.length; i++){

            if(chooseLetter === randomWord[i]){
                wordDisplay.textContent = randomWord[i]
            }
        }
        
    }


            
        
          





//Event Listner
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
for(let i=0; i<letters.length; i++){
letters[i].addEventListener('click',lettersChoosing)
}
