const readlineSync = require('readline-sync');

const welcomMsg = 'Welcome to the Brain Games!';
const userName = readlineSync.question('May I have your name? ');


const wrongAnswer = () => {
  return `'yes' is wrong answer ;(. Correct answer was 'no'. 
    Let's try again, ${userName}!`;
};

const greeting = name => `Hello ${name}!`;

const quizQuestion = (num) => {
  console.log(`Question: ${num}`);
  const isEven = num % 2 ? 'no' : 'yes';
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEven) {
    return 'Correct';
  }
  return wrongAnswer();
};


export { greeting, quizQuestion, welcomMsg, userName };

