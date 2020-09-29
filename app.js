import { compareNumbers } from './helper-functions.js';

const userGuess = document.getElementById('user-number');
const NumOfGuessLeft = document.getElementById('guesses-left');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');

let guessesLeft = 3;



button.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 5);
    const guess = userGuess.value; 
    const compareResults = compareNumbers(guess, randomNumber);
    


}); 


