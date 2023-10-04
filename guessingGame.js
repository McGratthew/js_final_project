const form = document.querySelector('.form');
const start = document.querySelector('button');
const feedback = document.querySelector('.feedback');
const counter = document.querySelector('.counter');
const numbersGuessed = document.querySelector('.previousGuesses')
let button;
const buttonInfo = document.createTextNode('Start new game');
let prevGuess = ""
let guess;
let randomNumber;
let guessCounter = 1;

const randomNumberPicker = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}

const reset = () => {
    guessCounter = 1;
    counter.textContent = null;
    feedback.textContent = null;
    numbersGuessed.textContent = null;
    prevGuess = "";
    form.guess.disabled = false;
    feedback.classList.remove("justRight", "tooMany");
    randomNumberPicker();
    form.guess.focus();
    button.parentNode.removeChild(button);
}

const gameOver = () => {
    button = document.createElement('button');
    form.guess.disabled = true
    button.appendChild(buttonInfo);
    button.classList.add('new-game');
    form.appendChild(button);
    button.focus();
    button.addEventListener('click', e => {
        e.preventDefault();
        reset();
    })
    
}


randomNumberPicker();

const guessChecker = () => {
    guess = Number(form.guess.value);
    
    if(guess == randomNumber) {
         feedback.textContent = "You got it!! Play again?";
         feedback.classList.add("justRight");
         feedback.classList.remove("tooSmall", "tooBig");
         gameOver();
        }  else if(guessCounter == 10) {
            feedback.textContent = "You ran out of guesses. Play again?";
            feedback.classList.add("tooMany");
            feedback.classList.remove("tooSmall", "tooBig");
            gameOver();
        } else {
            if(guess < randomNumber) {
                guessCounter++
                feedback.textContent = "Your guess is too low.";
                feedback.classList.add('tooSmall');
                feedback.classList.remove('tooBig')
            } else if(guess > randomNumber) {
                guessCounter++
                feedback.textContent = "Your guess is too high.";
                feedback.classList.add("tooBig");
                feedback.classList.remove("tooSmall")
            }
            console.log(guess);
            
        }}
        
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            guessChecker();
            prevGuess += guess + "  ";
            numbersGuessed.textContent = `${prevGuess}`;
            counter.textContent = `${guessCounter}`;
            form.reset();
        })
