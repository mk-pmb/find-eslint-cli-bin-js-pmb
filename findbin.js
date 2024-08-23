/* jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

const pathLib = require('path');

const ourRequire = require;

const EX = function findEslintCli(rqr) {
  const pkjsPath = rqr.resolve('eslint/package.json');
  let { bin } = ourRequire(pkjsPath);
  bin = (bin.eslint || bin);
  bin = pathLib.resolve(pkjsPath, '..', bin);
  return bin;
};

module.exports = EX;
