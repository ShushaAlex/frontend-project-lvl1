/* eslint-disable import/no-duplicates */
/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import greetingByUserName from './cli.js';
import { userName } from './cli.js';

const startGame = (gameRules, task, correctAnswer) => {
  greetingByUserName();
  console.log(gameRules);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
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

export default startGame;
