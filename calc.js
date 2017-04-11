'use strict';

function soma(...elementos) {
  const primeiroElemento = elementos[0];
  if (primeiroElemento === undefined)
    return { message: 'parâmentos faltando'};

  if (elementos.length === 1 && Array.isArray(primeiroElemento))
    return primeiroElemento.somaElementos();

  if (elementos.some(n => typeof n !== 'number'))
    return { message: 'parâmentos inválidos'};

  return elementos.somaElementos();
}

Array.prototype.somaElementos = function() {
    return this.reduce((total, item) => total + item, 0);
};

module.exports = { soma };
