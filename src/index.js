import readlineSync from 'readline-sync';

const question = () => {
    const userName = readlineSync.question('May I have your name? ');
    return 'Hello ' + userName + '!';
};

console.log(question());


