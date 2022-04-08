/* eslint-disable eol-last */
import generateRandomNumber from '../getRandomNum.js';
import engineGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const num = generateRandomNumber(0, 20);
  const result = (isPrime(num)) ? 'yes' : 'no';
  return [num, result];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startIsPrimeGame = () => engineGame(gameRules, generateData);

export default startIsPrimeGame;