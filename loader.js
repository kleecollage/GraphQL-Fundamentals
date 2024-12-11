//** THIS FILE IS CREATED TO WORK WITH:
// *   "dev": "nodemon --watch src --exec 'node loader.js'"

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('ts-node/esm', pathToFileURL('./'));

import('./src/index.ts');