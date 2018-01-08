import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../utils/getRandomNumber';

const mainQuestion = 'Answer "yes" if number even otherwise answer "no".';

const gameGenerator = () => {
  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  const num = getRandomNumber(1, 100);
  const result = isEven(num);
  const questionAndResult = cons(num, result);
  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
