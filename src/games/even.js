import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';
  return message;
};

const gameGenerator = () => {
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  const num = genarateNumber(1, 100);
  const result = isEven(num);
  const questionAndResult = cons(num, result);
  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
