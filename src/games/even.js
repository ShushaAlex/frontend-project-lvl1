/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import generateRandomNumber from '../get-random-num.js';

const isEven = (num) => {
  if (num === 0 || num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const correctAnswer = isEven(randomNumber);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const startIsEvenGame = () => {
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

export default startIsEvenGame;