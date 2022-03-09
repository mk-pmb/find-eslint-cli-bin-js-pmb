/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, pathLib = require('path');

EX = function findEslintCli(rqr) {
  var pkjsPath = rqr.resolve('eslint/package.json'),
    bin = require(pkjsPath).bin;
  bin = (bin.eslint || bin);
  bin = pathLib.resolve(pkjsPath, '..', bin);
  return bin;
};

module.exports = EX;
