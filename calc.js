'use strict';

function soma(a, b) {
  if(!a || !b)
  return {message: 'parâmetros faltando'};
  return a + b;
}

module.exports = { soma };
