import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = 'Is this number prime?';

const gameGenerator = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }
    for (let div = 2; div < num; div += 1) {
      if (num % div === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const num = genarateNumber(1, 100);
  const result = isPrime(num);
  const questionAndResult = cons(num, result);
  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
