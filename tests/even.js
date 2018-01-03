import { cons } from 'hexlet-pairs';
import index from './';

const readlineSync = require('readline-sync');

const createQuestion = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';
  return message;
};

const gettingAnswer = (string) => {
  const value = readlineSync.question(string);
  return value;
};

const generator = () => {
  const createNum = () => {
    const num = Math.floor((Math.random() * 40) / 2);
    return num;
  };

  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  const makePair = (num, result) => cons(num, result);

  const num = createNum();

  const result = isEven(num);

  const pair = makePair(num, result);

  return pair;
};
const mainQuestion = createQuestion();

export default () => index(generator, mainQuestion, gettingAnswer);
