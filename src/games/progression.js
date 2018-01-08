import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import getRandomNumber from '../utils/getRandomNumber';

const mainQuestion = 'What number is missing in this progression?';

const gameGenerator = () => {
  const nThMemberOfArithProgr = (startValue, interval, n) => (startValue + (interval * (n - 1)));

  const startValue = getRandomNumber(1, 100);
  const interval = getRandomNumber(1, 5);
  const hiddenNumElem = getRandomNumber(1, 10);
  const hiddenNum = nThMemberOfArithProgr(startValue, interval, hiddenNumElem);

  const createProgression = (n) => {
    if (n === 0) {
      return nThMemberOfArithProgr(startValue, interval, n);
    }
    if (n === hiddenNumElem) {
      return `${createProgression(n - 1)} ..`;
    }
    return `${createProgression(n - 1)} ${nThMemberOfArithProgr(startValue, interval, n)}`;
  };

  const questionAndResult = cons(createProgression(10), hiddenNum);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
