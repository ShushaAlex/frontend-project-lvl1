/* eslint-disable eol-last */
import generateRandomNumber from '../getRandomNum.js';
import startGame from '../index.js';

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

const gameRules = 'What number is missing in the progression?';
const startProgressionGame = () => startGame(gameRules, getProgression);

export default startProgressionGame;