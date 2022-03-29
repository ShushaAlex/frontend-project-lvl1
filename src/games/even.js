/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import { generateRandomNumber } from '../index.js';

const isEven = (num) => {
  if (num === 0 || num % 2 === 0) {
    return 'yes';
  }
  return 'no'; // Проверка четности
};

const startRound = () => {
  const randomNumber = generateRandomNumber(0, 100); // Вызываем случайное число
  const correctAnswer = isEven(randomNumber); // Проверяем его на четность
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: '); // Получаем ответ от юзера

  if (userAnswer === correctAnswer) { // Сравниваем ответы, сообщаем результат проверки юзеру
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const startIsEvenGame = () => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) { // задаем цикл из 3 раундов
    const result = startRound();
    if (result === false) {
      console.log(`Let's try again, ${userName}!`); // в случае неверного ответа прерываем игру
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`); // награждение победителей
};

export default startIsEvenGame;