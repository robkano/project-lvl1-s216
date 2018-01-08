import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../moduls/getRandomNumber';

const mainQuestion = 'Is this number prime?';

const gameGenerator = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let div = 2; div < num; div += 1) {
      if (num % div === 0) {
        return false;
      }
    }
    return true;
  };

  const num = getRandomNumber(1, 100);
  const result = isPrime(num) ? 'yes' : 'no';
  const questionAndResult = cons(num, result);
  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
