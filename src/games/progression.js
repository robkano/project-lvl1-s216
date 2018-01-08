import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../moduls/getRandomNumber';

const mainQuestion = 'What number is missing in this progression?';

const gameGenerator = () => {
  const createSequence = (startValue, interval, length = 10) => {
    let i = 0;
    const arr = [];
    let num = startValue;
    while (i < length) {
      arr.push(num);
      num += interval;
      i += 1;
    }
    return arr;
  };

  const createProgression = (arr) => {
    const str = arr.map(String);
    const i = getRandomNumber(1, 10);
    const result = str[i];
    str.splice(i, 1, '..');
    return cons(str.join(' '), result);
  };

  const startValue = getRandomNumber(1, 100);
  const interval = getRandomNumber(1, 5);
  const sequence = createSequence(startValue, interval);
  const questionAndResult = createProgression(sequence);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
