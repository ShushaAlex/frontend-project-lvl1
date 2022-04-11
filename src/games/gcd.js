/* eslint-disable no-restricted-syntax */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateData = () => {
  const firstNumber = generateRandomNumber(0, 20);
  const secondNumber = generateRandomNumber(0, 20);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber).toString();
  return [task, correctAnswer];
};

const gameRules = 'Find the greatest common divisor of given numbers.';
const startGcdGame = () => engineGame(gameRules, generateData);

export default startGcdGame;
