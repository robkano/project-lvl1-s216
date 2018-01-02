import { cons } from 'hexlet-pairs';

const readlineSync = require('readline-sync');

const welcomeMsg = () => 'Welcome to the Brain Games!';

const grittingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const numberGenerator = () => {
  const num = Math.floor((Math.random() * 40) / 2);
  return num;
};

const makeEqution = (num1, num2) => cons(num1, num2);

const wrongAnswer = (user) => {
  const message = `Sorry, but it's wrong answer. Let's try again ${user}`;
  return message;
};

const congrantsMsg = (user) => {
  const message = `Good Job ${user}!!!`;
  return message;
};

export { welcomeMsg, grittingUser, numberGenerator, wrongAnswer, congrantsMsg, makeEqution };
