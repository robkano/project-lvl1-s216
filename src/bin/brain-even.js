#!/usr/bin/env node
import { welcomMsg, userName, quizQuestion, greeting } from '../';

console.log(welcomMsg);
console.log('Answer "yes" if number even otherwise answer "no".\n');
console.log(greeting(userName));
console.log(quizQuestion());

