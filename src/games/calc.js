/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { generateRandomNumber } from './even.js';
import { userName } from '../cli.js';

const generateRandomChar = (arr) => {
  const i = generateRandomNumber(0, 2);
  const result = arr[i];
  return result;
};

const startRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operator = generateRandomChar(['+', '-', '*']);
  console.log('What is the result of the expression?');
  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

  const calculateAnswer = (str) => {
    switch (str) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      default:
        return 'There is no operator';
    }
  };
  const correctAnswer = calculateAnswer(operator).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const startCalcGame = () => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = startRound();
    if (result === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startCalcGame;