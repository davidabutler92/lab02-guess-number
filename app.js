import { compareNumbers } from './helper-functions.js';

const userGuess = document.getElementById('user-number');
const numOfGuessLeft = document.getElementById('guesses-left');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');
const playAgainButton = document.getElementById('play-again');

let guessesLeft = 3;
const winningNumber = Math.ceil(Math.random() * 5);

button.addEventListener('click', () => {
    const guess = Number(userGuess.value); 
    const comparedResults = compareNumbers(guess, winningNumber);
    if (guessesLeft === 0) {
        results.textContent = 'Oops, you ran out of guesses, you lose!';
        numOfGuessLeft.textContent = 0;
        button.style.display = 'none';
        playAgainButton.style.display = 'block';
    } else if (comparedResults === 0) {
        results.textContent = ('YAY! WINNER WINNER CHICKEN DINNER!');
        button.style.display = 'none';
        playAgainButton.style.display = 'block';
        guessesLeft--;
        numOfGuessLeft.textContent = guessesLeft;
    } else if (comparedResults === -1) {
        results.textContent = 'Oof, Your guess was too low, guess again.';
        guessesLeft--;
        numOfGuessLeft.textContent = guessesLeft;
    } else if (comparedResults === 1) {
        results.textContent = 'Oof, your guess was too high, guess again.';
        guessesLeft--;
        numOfGuessLeft.textContent = guessesLeft; 
    }
    
    playAgainButton.addEventListener('click', () => {
        guessesLeft = 3;
        numOfGuessLeft.textContent = guessesLeft;
        userGuess.value = '';
        results.textContent = '';
        playAgainButton.style.display = 'none';
        button.style.display = 'block';
        //loaction.reload();  This does the same thing as content above ^ only downside is that you have to refresh the page.
    });
});