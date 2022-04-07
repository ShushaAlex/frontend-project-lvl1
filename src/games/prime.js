/* eslint-disable eol-last */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const isPrime = () => {
  const num = generateRandomNumber(0, 20);
  if (num <= 1) {
    return [num, 'no'];
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startIsPrimeGame = () => engineGame(gameRules, isPrime);

export default startIsPrimeGame;