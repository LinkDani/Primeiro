'use strict';

function soma(a, b) {
  if(!a || !b)
  return {message: 'parâmetros faltando'};

  if (typeof a === 'string' || typeof b === 'string')
return { message: 'parâmentos inválidos'};

  return a + b;
}

module.exports = { soma };
