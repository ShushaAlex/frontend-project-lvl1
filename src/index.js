/* eslint-disable import/no-duplicates */
/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import greetingByUserName from './cli.js';
import { userName } from './cli.js';

const numberOfRounds = 3;

const engineGame = (gameRules, gameFunction) => {
  greetingByUserName();
  console.log(gameRules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [task, correctAnswer] = gameFunction();
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

export default engineGame;
