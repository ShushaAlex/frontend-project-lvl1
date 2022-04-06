/* eslint-disable no-restricted-syntax */
/* eslint-disable eol-last */
import generateRandomNumber from '../get-random-num.js';
import startGame from '../index.js';

const getDividers = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};
const getCommonDivider = (arr1, arr2) => {
  const newArray = [];
  for (const item of arr1) {
    if (arr2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray[newArray.length - 1];
};

const calCorrectAnswer = (num1, num2) => {
  const dividersOfFirstNum = getDividers(num1);
  const dividersOfSecondNum = getDividers(num2);
  return getCommonDivider(dividersOfFirstNum, dividersOfSecondNum);
};

const gcdGame = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const task = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calCorrectAnswer(firstNumber, secondNumber).toString();
  return [task, correctAnswer];
};

const gameRules = 'Find the greatest common divisor of given numbers.';
const startGcdGame = () => startGame(gameRules, gcdGame);

export default startGcdGame;