// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const assert = require('assert');

const findEsLintCliBin = require('../findbin.js');

const bin = findEsLintCliBin(require);
const eq = assert.strictEqual;
eq(typeof bin, 'string');
eq(bin.slice(0, 1), '/');
eq(bin.slice(-3), '.js');
eq(bin.includes('eslint'), true);

console.info('+OK basics test passed.');
