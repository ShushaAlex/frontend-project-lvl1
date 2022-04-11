import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const generateRandomChar = (arr) => {
  const i = generateRandomNumber(0, arr.length - 1);
  const result = arr[i];
  return result;
};

const calculateAnswer = (str, num1, num2) => {
  switch (str) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'There is no operator';
  }
};

const generateData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operator = generateRandomChar(['+', '-', '*']);
  const task = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculateAnswer(operator, firstNumber, secondNumber).toString();
  return [task, correctAnswer];
};

const gameRules = 'What is the result of the expression?';
const startCalcGame = () => engineGame(gameRules, generateData);

export default startCalcGame;
