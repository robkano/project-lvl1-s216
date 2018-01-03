import { welcomeMsg, grittingUser, numberGenerator, congrantsMsg, wrongAnswer } from '../';

const readlineSync = require('readline-sync');

export default () => {
  console.log(welcomeMsg());
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = grittingUser();

  const generateCorrectAnswer = (answer) => {
    if (answer === 'yes') {
      return true;
    } else if (answer === 'no') {
      return false;
    }
  };

  let i = 0;
  while (i < 3) {
    const num = numberGenerator();
    console.log(`Question: ${num}`);
    const rigthAnswer = num % 2 === 0;
    const userAnswer = generateCorrectAnswer(readlineSync.question('Your answer: '));
    if (rigthAnswer === userAnswer) {
      console.log('Correct\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  return congrantsMsg(userName);
};
