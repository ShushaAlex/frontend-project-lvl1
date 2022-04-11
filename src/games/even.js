import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const isEven = (num) => {
  const result = !!((num === 0 || num % 2 === 0));
  return result;
};

const generateData = () => {
  const num = generateRandomNumber(0, 20);
  const result = isEven(num) ? 'yes' : 'no';
  return [num, result];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startIsEvenGame = () => engineGame(gameRules, generateData);

export default startIsEvenGame;
