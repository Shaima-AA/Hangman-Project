let randomWord = "";
let guessed = [];   // letters already picked
let mistakeNo = 0;
const wordsArray = ["ITALY", "SPAIN", "BAHRAIN", "CHINA", "RICE", "PIZZA", "SUSHI","PASTA", "CAT", "LION", "DUCK","PANDA"]

/*caching*/
const startButton = document.querySelector('#start-btn')
const restartButton = document.querySelector('#restart')
const letters = document.querySelectorAll('.letters')
const wordDisplay = document.querySelector('#word-display')
const hintMessage = document.querySelector('#hint')
const fullBody = document.querySelector('#img')
const message = document.querySelector('#message')
const heartsEl = document.querySelectorAll('.heart')


console.log(startButton)
console.log(restartButton)
console.log(letters)

/*functions*/
function startGame() {
    mistakeNo = 0;
    fullBody.src = stages[0]
    guessed = []
    restartButton.style.backgroundColor = ''
    message.textContent = ""
      for (let i = 0; i < heartsEl.length; i++) {
        heartsEl[i].style.visibility = 'visible'
    }
   
    


    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    randomWord = wordsArray[randomIndex];//chooses randomly a word from the wordsArray array
    console.log(randomWord)

    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = false
        letters[i].style.backgroundColor = ''
        letters[i].style.visibility = "visible"
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

    if (["ITALY", "SPAIN", "BAHRAIN","CHINA"].includes(randomWord)) {
        showHint.textContent = "Hint: Country";
    } else if (["RICE", "PIZZA", "SUSHI","PASTA"].includes(randomWord)) {
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
        }
    }
    if (found === false) {
        mistakes(event)
    }

    if (found === true) {
        let won = true
        for (let i = 0; i < Blanks.length; i++) {
            if (Blanks[i].textContent === "") {
                won = false
            }
        }
        if (won === true) {
            message.textContent = "You won!"
            disableLetters()
        }
    }
    if (mistakeNo === 6) {
        message.textContent = "You lost! The word was " + randomWord
        disableLetters()
    }

}
function disableLetters() {
    for (let i = 0; i < letters.length; i++) {
        letters[i].disabled = true
    }
}

const stages = [
    "./body parts/gallows-only.png",

    "./body parts/head-only-with-gallows.png",

    "./body parts/right arm.png",

    "./body parts/left arm.png",

    "./body parts/3-head-both-arms-body.png",

    "./body parts/right leg.png",

    "./body parts/left leg.png"
]
function mistakes(event) {
    mistakeNo++
    event.target.style.backgroundColor = 'red'
    event.target.disabled = true
    fullBody.src = stages[mistakeNo]
heartsEl[mistakeNo - 1].style.visibility = 'hidden'}


    



/*Event Listners*/
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', lettersChoosing)
}


