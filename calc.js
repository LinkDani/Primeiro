
'use strict';

function soma(a, b = 0) {
  if (a === undefined)
    return { message: 'parâmentos faltando'};

  if (typeof a === 'string' || typeof b === 'string')
    return { message: 'parâmentos inválidos'};

  let resultado = 0;
  for(let i = 0; i < arguments.length; i++) {
    resultado = resultado + arguments[i];
  }
  return resultado;
}

module.exports = { soma };
