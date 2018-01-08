import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../moduls/getRandomNumber';

const mainQuestion = 'What number is missing in this progression?';

const gameGenerator = () => {
  const createSequence = (startValue, interval, n) => (startValue + (interval * (n - 1)));


  const createProgression = (n) => {
    const startValue = getRandomNumber(1, 100);
    const interval = getRandomNumber(1, 5);
    const hidenNumElem = getRandomNumber(1, 10);
    let hidenNum = 0;

    let i = 1;
    let result = ' ';
    while (i < n) {
      result += `${createSequence(startValue, interval, i)} `;
      if (i === hidenNumElem) {
        result += '.. ';
        hidenNum = createSequence(startValue, interval, i += 1);
      }
      i += 1;
    }
    return cons(result, hidenNum);
  };

  const questionAndResult = createProgression(10);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
