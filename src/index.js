const readlineSync = require('readline-sync');

const welcomMsg = 'Welcome to the Brain Games!';
const userName = readlineSync.question('May I have your name? ');

const generator = () => {
  const num = Math.floor((Math.random() * 40) / 2);
  return num;
};

const wrongAnswer = () => {
  return `'yes' is wrong answer ;(. Correct answer was 'no'. 
  Let's try again, ${userName}!`;
};

const greeting = name => `Hello ${name}!\n`;

const quizQuestion = () => {
  let i = 0;
  while (i < 3) {
    const num = generator();
    console.log(`Question: ${num}`);
    const isEven = num % 2 ? 'no' : 'yes';
    const answer = readlineSync.question('Your answer: ');
    i += 1;
    if (answer === isEven) {
      console.log('Correct');
    } else {
      return wrongAnswer();
    }
  }
  return `Congratulations, ${userName}`;
};


export { greeting, quizQuestion, welcomMsg, userName, generator };

