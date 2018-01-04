import { cons } from 'hexlet-pairs';
import index from '../index';

const gameQuestion = () => {
  const message = 'What is the result of the expression?\n';
  return message;
};

const gameGenerator = () => {
  const createNum = () => {
    const num = Math.floor((Math.random() * 40) / 2);
    return num;
  };

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

    const createPair = (question, result) => {
      const pair = cons(question, result);
      return pair;
    };

    const question = createQuetion(oparator);
    const result = createResult(oparator);
    const pair = createPair(question, result);

    return pair;
  };

  const num1 = createNum();
  const num2 = createNum();
  const oparator = createOperators();
  const pair = createQuiz(num1, num2, oparator);

  return pair;
};

const mainQuestion = gameQuestion();

export default () => index(gameGenerator, mainQuestion);
