/* eslint-disable eol-last */
// eslint-disable-next-line import/prefer-default-export
export const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const compareAnswers = (one, two) => {
  if (one === two) {
    return true;
  }
  return false;
};