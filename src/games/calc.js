/* eslint-disable eol-last */
import generateRandomNumber from '../get-random-num.js';
import startGame from '../index.js';

const generateRandomChar = (arr) => {
  const i = generateRandomNumber(0, 2);
  const result = arr[i];
  return result;
};

const calcGame = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operator = generateRandomChar(['+', '-', '*']);
  const task = `${firstNumber} ${operator} ${secondNumber}`;

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
  return [task, correctAnswer];
};

const gameRules = 'What is the result of the expression?';
const startCalcGame = () => startGame(gameRules, calcGame);

export default startCalcGame;