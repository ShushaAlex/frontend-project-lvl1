import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const engineGame = (gameRules, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
