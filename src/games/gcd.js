/* eslint-disable no-restricted-syntax */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const gcd = (num1, num2) => {
  let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

const generateData = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber).toString();
  return [task, correctAnswer];
};

const gameRules = 'Find the greatest common divisor of given numbers.';
const startGcdGame = () => engineGame(gameRules, generateData);

export default startGcdGame;
