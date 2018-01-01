#!/usr/bin/env node
import { welcomMsg, userName, quizQuestion, greeting } from '../';

console.log(welcomMsg);
console.log('Answer "yes" if number even otherwise answer "no".');
console.log(greeting(userName));
console.log(quizQuestion(15));
console.log(quizQuestion(6));
console.log(quizQuestion(7));
