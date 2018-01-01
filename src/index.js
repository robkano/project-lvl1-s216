const readlineSync = require('readline-sync');

const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello ${userName}!`;
};

export default { question };
