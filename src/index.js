const readlineSync = require('readline-sync');

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  const generator = () => {
    const num = Math.floor((Math.random() * 40) / 2);
    return num;
  };
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
      return `'yes' is wrong answer ;(. Correct answer was 'no'. 
        Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}`;
};
