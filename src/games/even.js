import { cons } from 'hexlet-pairs';
import index from '../index';

const mainQuestion = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';
  return message;
};

const gameGenerator = () => {
  const createNum = () => {
    const num = Math.floor((Math.random() * 40) / 2);
    return num;
  };

  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  const createPair = (num, result) => cons(num, result);

  const num = createNum();
  const result = isEven(num);
  const pair = createPair(num, result);
  return pair;
};
const gameQuestion = mainQuestion();

export default () => index(gameGenerator, gameQuestion);
