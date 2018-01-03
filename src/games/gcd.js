import { cons, car, cdr } from 'hexlet-pairs';
import index from '../index';

const readlineSync = require('readline-sync');

const createQuestion = () => {
  const message = 'Find the greatest common divisor of given numbers.\n';
  return message;
};

const gettingAnswer = (string) => {
  const value = readlineSync.question(string);
  return Number(value);
};

const generator = () => {
  const createNumPair = () => {
    const num1 = Math.floor((Math.random() * 100));
    const num2 = Math.floor((Math.random() * 40));
    const numPair = cons(num1, num2);
    console.log(num1, num2);
    return numPair;
  };

  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };

  const makePair = (question, result) => cons(question, result);

  const numPair = createNumPair();
  const result = gcd(car(numPair), cdr(numPair));
  const question = `${car(numPair)} ${cdr(numPair)}`;
  const pair = makePair(question, result);

  return pair;
};


const mainQuestion = createQuestion();

export default () => index(generator, mainQuestion, gettingAnswer);
