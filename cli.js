import question from "readline-sync";

const whatsYourName = () => {
let readlineSync = require('readline-sync');
let userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
};

export default whatsYourName;