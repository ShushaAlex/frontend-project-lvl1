/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../index.js';
import { userName } from '../cli.js';

const getProgression = () => {
  const numbers = [];
  const progressionStep = generateRandomNumber(2, 5);
  const progressionStart = generateRandomNumber(0, 50);
  const progressionNumbersCount = generateRandomNumber(5, 10);
  const progressionEnd = progressionStart + (progressionStep * progressionNumbersCount);
  for (let i = progressionStart; i <= progressionEnd; i += progressionStep) {
    numbers.push(i);
  }
  const missedNumberIndex = generateRandomNumber(0, numbers.length - 1);
  const missedNumber = numbers[missedNumberIndex];
  numbers[missedNumberIndex] = '..';
  return [numbers.join(' '), missedNumber.toString()];
};

const startProgressionGame = () => {
  console.log('What number is missing in the progression?');
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const progressionFinal = getProgression();
    const task = progressionFinal[0];
    const correctAnswer = progressionFinal[1];
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startProgressionGame;