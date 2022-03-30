/* eslint-disable eol-last */
import { generateRandomNumber } from '../index.js';

const getProgression = () => {
  const numbers = [];
  const progressionStep = generateRandomNumber(0, 5);
  const progressionStart = generateRandomNumber(0, 50);
  const progressionNumbersCount = generateRandomNumber(5, 10);
  const missedNumber = generateRandomNumber(0, progressionNumbersCount - 1);
  const progressionEnd = progressionStart + (progressionStep * progressionNumbersCount);
  for (let i = progressionStart; i <= progressionEnd; i += progressionStep) {
    numbers.push(i);
  }
  numbers[missedNumber] = '..';
  console.log(numbers.join(' '));
};

export default getProgression;