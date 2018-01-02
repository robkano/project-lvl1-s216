import { car, cdr } from 'hexlet-pairs';
import { welcomeMsg, grittingUser, numberGenerator, wrongAnswer, congrantsMsg, makeEqution } from '../';

const readlineSync = require('readline-sync');

export default () => {
  console.log(welcomeMsg());
  console.log('What is the result of the expression?\n');
  const userName = grittingUser();

  let i = 0;
  while (i < 3) {
    const eqution = makeEqution(numberGenerator(), numberGenerator());
    console.log(`${car(eqution)} + ${cdr(eqution)}`);
    const usersAnswer = Number(readlineSync.question('Your answer: '));
    const rigthAnswer = car(eqution) + cdr(eqution);
    if (rigthAnswer === usersAnswer) {
      console.log('Correct\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  return congrantsMsg(userName);
};
