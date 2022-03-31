/* eslint-disable eol-last */
import { generateRandomNumber } from '../index.js';

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

const progressionFinal = getProgression();
const task = progressionFinal[0];
const correctAnswer = progressionFinal[1];