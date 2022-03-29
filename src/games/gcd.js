/* eslint-disable no-restricted-syntax */
/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../index.js';
import { userName } from '../cli.js';

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

const startGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = generateRandomNumber(0, 100);
    const secondNumber = generateRandomNumber(0, 100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calCorrectAnswer(firstNumber, secondNumber).toString();
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGcdGame;