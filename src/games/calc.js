import { cons } from 'hexlet-pairs';
import gameProsses from '../';
import genarateNumber from '../moduls/generateNumber';

const mainQuestion = 'What is the result of the expression?';

const gameGenerator = () => {
  const createOperators = () => {
    const num = Math.floor((Math.random() * 6) / 2);
    switch (num) {
      case 1: return '+';
      case 2: return '-';
      case 0: return '*';
      default:
    }
  };

  const createQuiz = (num1, num2, oparator) => {
    const createQuetion = (opr) => {
      switch (opr) {
        case '+': return `${num1} + ${num2}`;
        case '-': return `${num1} - ${num2}`;
        case '*': return `${num1} * ${num2}`;
        default:
      }
    };

    const createResult = (opr) => {
      switch (opr) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        default:
      }
    };

    const question = createQuetion(oparator);
    const result = createResult(oparator);
    const questionAndResult = cons(question, result);

    return questionAndResult;
  };

  const num1 = genarateNumber(1, 100);
  const num2 = genarateNumber(1, 100);
  const oparator = createOperators();
  const questionAndResult = createQuiz(num1, num2, oparator);

  return questionAndResult;
};

export default () => gameProsses(gameGenerator, mainQuestion);
