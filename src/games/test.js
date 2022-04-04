/* eslint-disable eol-last */
import generateRandomNumber from '../get-random-num.js';
import startGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const task = generateRandomNumber(0, 20);
const correctAnswer = isPrime(task);

startGame(gameRules, task, correctAnswer);

export default startGame;