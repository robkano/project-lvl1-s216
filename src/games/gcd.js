import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../utils/getRandomNumber';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const gameGenerator = () => {
  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };

  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const result = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  const questionAndResult = cons(question, result);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
