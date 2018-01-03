import { welcomeMsg, grittingUser, numberGenerator,
  congrantsMsg, gcdResult, wrongAnswer } from '../';

const readlineSync = require('readline-sync');

export default () => {
  console.log('Find the greatest common divisor of given numbers.\n');
  console.log(welcomeMsg());
  const userName = grittingUser();

  let i = 0;
  while (i < 3) {
    const num1 = numberGenerator();
    const num2 = numberGenerator();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const rigthAnswer = gcdResult(num1, num2);
    if (rigthAnswer === userAnswer) {
      console.log('Correct\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  return congrantsMsg(userName);
};
