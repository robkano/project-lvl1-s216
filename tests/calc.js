#!/usr/bin/env node
import { cons, car, cdr } from 'hexlet-pairs';
import index from './';

const readlineSync = require('readline-sync');

const createQuestion = () => {
  const message = 'What is the result of the expression?\n';
  return message;
};

const gettingAnswer = (string) => {
  const value = readlineSync.question(string);
  return Number(value);
};

const generator = () => {
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

  const equtionShow = (numPair, oparator) => {
    const num1 = car(numPair);
    const num2 = cdr(numPair);
    switch (oparator) {
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

  const makePair = (question, result) => {
    const pair = cons(question, result);
    return pair;
  };

  const numPair = createNumPair();
  const oparator = createOperators();
  const question = equtionShow(numPair, oparator);
  const result = equtionResult(numPair, oparator);
  const pair = makePair(question, result);

  return pair;
};

// const answer = gettingAnswer();
const mainQuestion = createQuestion();

export default () => index(generator, mainQuestion, gettingAnswer);

