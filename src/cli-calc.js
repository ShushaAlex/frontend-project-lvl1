/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { generateRandomNumber } from './cli-even.js';
import { askUser } from './cli-ask-answer.js';
import { userName } from './cli.js';

const generateRandomChar = (arr) => {
  const arrLength = arr.length();
  const i = generateRandomNumber(0, arrLength - 1);
  const result = arr[i];
  return result;
};

const startRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operator = generateRandomChar(['+', '-', '*']);
  console.log('What is the result of the expression?');
  askUser(firstNumber, operator, secondNumber);

  const calculateAnswer = () => {
    switch (operator) {
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
  const correctAnswer = calculateAnswer.toString();
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