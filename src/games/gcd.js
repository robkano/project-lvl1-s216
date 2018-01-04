import { cons } from 'hexlet-pairs';
import gameProsses from '../index';

const mainQuestion = () => {
  const message = 'Find the greatest common divisor of given numbers.\n';
  return message;
};

const gameGenerator = () => {
  const createNum = () => {
    const num = Math.floor((Math.random() * 100));
    return num;
  };

  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };

  const createPair = (question, result) => cons(question, result);

  const num1 = createNum();
  const num2 = createNum();

  const result = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  const pair = createPair(question, result);

  return pair;
};


const gameQuestion = mainQuestion();

export default () => gameProsses(gameGenerator, gameQuestion);
