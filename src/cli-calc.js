import { generateRandomNumber } from './cli-even.js';
import { askUser } from './cli-ask-answer.js';

const generateRandomChar = () => {
  const arr = ['+', '-', '*'];
  const i = generateRandomNumber(0, 2);
  const result = arr[i];
  return result;
};
