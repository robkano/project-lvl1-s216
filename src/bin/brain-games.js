#!/usr/bin/env node
import { question, welcomMsg, userName } from '../';

console.log(welcomMsg);

console.log(question(userName));
