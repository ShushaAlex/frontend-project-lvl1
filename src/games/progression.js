/* eslint-disable eol-last */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const getProgression = (step, start, count) => {
  const numbers = [];
  const progressionEnd = start + (step * count);
  for (let i = start; i <= progressionEnd; i += step) {
    numbers.push(i);
  }
  return numbers;
};

const generateData = () => {
  const progressionStep = generateRandomNumber(1, 7);
  const progressionStart = generateRandomNumber(0, 50);
  const progressionLength = generateRandomNumber(5, 10);
  const numbers = getProgression(progressionStep, progressionStart, progressionLength);
  const missedNumberIndex = generateRandomNumber(0, progressionLength);
  const missedNumber = numbers[missedNumberIndex];
  numbers[missedNumberIndex] = '..';
  const task = numbers.join(' ');
  const correctAnswer = missedNumber.toString();
  return [task, correctAnswer];
};

const gameRules = 'What number is missing in the progression?';
const startProgressionGame = () => engineGame(gameRules, generateData);

export default startProgressionGame;