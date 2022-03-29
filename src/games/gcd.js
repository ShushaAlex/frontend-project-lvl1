/* eslint-disable no-restricted-syntax */
/* eslint-disable eol-last */
import { generateRandomNumber } from '../index.js';

const getDividers = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};
const getCommonDivider = (arr1, arr2) => {
  const newArray = [];
  for (const item of arr1) {
    if (arr2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray[newArray.length - 1];
};

const correctAnswer = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const dividersOfFirstNum = getDividers(firstNumber);
  const dividersOfSecondNum = getDividers(secondNumber);
  getCommonDivider(dividersOfFirstNum, dividersOfSecondNum);
};