import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

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

  const checkBoolean = value => (value ? 'yes' : 'no');

  const num = genarateNumber(1, 100);
  const prime = isPrime(num);
  const result = checkBoolean(prime);
  const questionAndResult = cons(num, result);
  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
