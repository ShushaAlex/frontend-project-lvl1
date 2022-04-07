/* eslint-disable eol-last */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const isEven = () => {
  const num = generateRandomNumber(0, 20);
  if (num === 0 || num % 2 === 0) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startIsEvenGame = () => engineGame(gameRules, isEven);

export default startIsEvenGame;
