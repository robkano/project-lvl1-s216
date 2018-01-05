import { car, cdr } from 'hexlet-pairs';

const readlineSync = require('readline-sync');

const welcomeMsg = () => {
  const message = 'Welcome to the Brain Games!';
  return message;
};

const greettingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const gettingAnswer = (string) => {
  const value = readlineSync.question(string);
  return value;
};

const wrongAnswer = (user) => {
  const message = `Sorry, but it's wrong answer. Let's try again ${user}`;
  console.log(message);
};

const congrantsMsg = (user) => {
  const message = `Good Job ${user}!!!`;
  return message;
};

export default (gameGenerator, mainQuetion) => {
  console.log(welcomeMsg());
  console.log(mainQuetion());
  const userName = greettingUser();
  congrantsMsg(userName);

  let i = 0;
  while (i < 3) {
    const pair = gameGenerator();
    const question = car(pair);
    const result = cdr(pair);

    console.log(`Question: ${question}`);
    const userAnswer = gettingAnswer('Your answer: ');

    if (String(result) === userAnswer) {
      console.log('Correct!\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  console.log(congrantsMsg(userName));
};
