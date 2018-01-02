import { welcomeMsg, grittingUser, numberGenerator,
  wrongAnswer, congrantsMsg, equtionResult,
  createOperators, equtionShow } from '../';

const readlineSync = require('readline-sync');

export default () => {
  console.log(welcomeMsg());
  console.log('What is the result of the expression?\n');
  const userName = grittingUser();

  let i = 0;
  while (i < 3) {
    const num1 = numberGenerator();
    const num2 = numberGenerator();
    const oparator = createOperators();
    console.log(`Question: ${equtionShow(num1, num2, oparator)}`);
    const usersAnswer = Number(readlineSync.question('Your answer: '));
    const rigthAnswer = equtionResult(num1, num2, oparator);
    if (rigthAnswer === usersAnswer) {
      console.log('Correct\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  return congrantsMsg(userName);
};
