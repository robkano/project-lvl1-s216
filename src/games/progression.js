import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import generateSequence from '../moduls/generateSequence';

const mainQuestion = 'What number is missing in this progression?';

const gameGenerator = () => {
  const hideNumber = (arr) => {
    const str = arr.map(String);
    const i = Math.floor(Math.random() * 10);
    const result = str[i];
    str.splice(i, 1, '..');
    return cons(str.join(' '), result);
  };

  const sequnce = generateSequence(2);
  const questionAndResult = hideNumber(sequnce);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
