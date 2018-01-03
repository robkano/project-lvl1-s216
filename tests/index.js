const readlineSync = require('readline-sync');

const welcomeMsg = () => 'Welcome to the Brain Games!';

const greettingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const wrongAnswer = (user) => {
  const message = `Sorry, but it's wrong answer. Let's try again ${user}`;
  return message;
};

const congrantsMsg = (user) => {
  const message = `Good Job ${user}!!!`;
  return message;
};

export default (openningQuestion, quiz, answer, result) => {
  welcomeMsg();
  console.log(openningQuestion);
  const userName = greettingUser();

  // Loop of three questions
  let i = 0;
  while (i < 3) {
    console.log(quiz);
    const userAnswer = answer;
    const rigthAnswer = result;
    if (rigthAnswer === userAnswer) {
      console.log('Correct\n');
    } else {
      return wrongAnswer(userName);
    }
    i += 1;
  }
  return congrantsMsg(userName);
};
