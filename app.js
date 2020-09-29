import { compareNumbers } from './helper-functions.js';

const userGuess = document.getElementById('user-number');
const numOfGuessLeft = document.getElementById('guesses-left');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');

let guessesLeft = 3;
const randomNumber = Math.ceil(Math.random() * 5);


button.addEventListener('click', () => {
    console.log(randomNumber);
    const guess = Number(userGuess.value); 
    const comparedResults = compareNumbers(guess, randomNumber);

    if (comparedResults === 0) {
        results.textContent = ('YAY! WINNER WINNER CHICKEN DINNER!');
        return;
        
    } if (comparedResults === -1) {
        results.textContent = 'Oof, Your guess was too low, guess again.';
        guessesLeft--;
        numOfGuessLeft.textContent = guessesLeft;
    } if (comparedResults === 1) {
        results.textContent = 'Oof, your guess was too high, gues again.';
        guessesLeft--;
        numOfGuessLeft.textContent = guessesLeft; }
    if (guessesLeft === 0) {
        results.textContent = 'Oops, you ran out of guesses, you lose!';
        return;
    } 
});