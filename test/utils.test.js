// IMPORT MODULES under test here:
import { compareNumbers } from '../helper-functions.js';

const test = QUnit.test;

test('takes in a guess and a correct answer, if they are the same returns 0', (expect) => {
    
    const guess = 3;
    const correctAnswer = 3;
    const expected = 0;

    const actual = compareNumbers(guess, correctAnswer);
    expect.equal(actual, expected);
});

test('takes in a guess and a correct answer, if they are the same returns -1', (expect) => {
    
    const guess = 2;
    const correctAnswer = 3;
    const expected = -1;

    const actual = compareNumbers(guess, correctAnswer);
    expect.equal(actual, expected);
});

test('takes in a guess and a correct answer, if the guess is too low return 1', (expect) => {
    
    const guess = 4;
    const correctAnswer = 3;
    const expected = 1;
    
    const actual = compareNumbers(guess, correctAnswer);
    expect.equal(actual, expected);
});

