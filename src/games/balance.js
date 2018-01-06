import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = 'Balance the given number.\n';

const gameGenerator = () => {
  const balance = (num) => {
    const array = num.toString().split('').sort();
    const number = array.map(Number);

    while (number[array.length - 1] - number[0] > 1) {
      number[0] += 1;
      number[array.length - 1] -= 1;
      number.sort();
    }
    return number.join('');
  };

  const num = genarateNumber(1, 500);
  const result = balance(num);
  const question = `${num}`;
  const questionAndResult = cons(question, result);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
