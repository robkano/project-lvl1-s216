import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = 'What number is missing in this progression?';

const gameGenerator = () => {
  const sequence = (num) => {
    let i = 1;
    let result = '';
    let hidenNum = 0;
    let n = num;
    const x = Math.floor(Math.random() * 10);
    while (i < 10) {
      result += `${n} `;
      if (i === x) {
        result += '.. ';
        n += 2;
        hidenNum += n;
      }
      n += 2;
      i += 1;
    }
    return cons(result, hidenNum);
  };

  const num = genarateNumber(1, 100);
  const questionAndResult = sequence(num);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
