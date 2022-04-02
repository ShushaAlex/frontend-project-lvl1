/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import generateRandomNumber from '../get-random-num.js';
import { userName } from '../cli.js';

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

const startIsPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const task = generateRandomNumber(0, 20);
    const correctAnswer = isPrime(task);
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startIsPrimeGame;