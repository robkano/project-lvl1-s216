import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const gameGenerator = () => {
  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };

  const num1 = genarateNumber(1, 100);
  const num2 = genarateNumber(1, 100);

  const result = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  const questionAndResult = cons(question, result);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
