#!/usr/bin/env node
import { cons, car, cdr } from 'hexlet-pairs';
import index from './index';

const readlineSync = require('readline-sync');

const createQuestion = () => 'What is the result of the expression?\n';

const createNumPair = () => {
  const num1 = Math.floor((Math.random() * 40) / 2);
  const num2 = Math.floor((Math.random() * 40) / 2);
  const numPair = cons(num1, num2);
  return numPair;
};

const createOperators = () => {
  const num = Math.floor((Math.random() * 6) / 2);
  switch (num) {
    case 1: return '+';
    case 2: return '-';
    case 0: return '*';
    default: console.log(null);
  }
};

const equtionShow = (num1, num2, opr) => {
  switch (opr) {
    case '+': return `${num1} + ${num2}`;
    case '-': return `${num1} - ${num2}`;
    case '*': return `${num1} * ${num2}`;
    default: console.log(null);
  }
};

const equtionResult = (numPair, oparator) => {
  const num1 = car(numPair);
  const num2 = cdr(numPair);
  switch (oparator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: console.log(null);
  }
};

const makeQuiz = (numPair, oparator) => {
  const num1 = car(numPair);
  const num2 = cdr(numPair);
  return `Question: ${equtionShow(num1, num2, oparator)}`;
};

const gettingAnswer = () => {
  const value = Number(readlineSync.question('Your answer: '));
  return value;
};

const openningQuestion = createQuestion();
const oparator = createOperators();
const numPair = createNumPair();
const quiz = makeQuiz(numPair, oparator);
const answer = gettingAnswer();
const result = equtionResult(numPair, oparator);

export default () => index(quiz, answer, result, openningQuestion);

