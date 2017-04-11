const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.experiment('quando não informa parâmetros', () => {
  lab.test('deve retornar erro específico', (done) => {
      const r = soma();
      expect(r.message).to.equal("parâmentos faltando")
      done();
  });
});

lab.experiment('quando informa parâmetros numéricos', () => {
  lab.test('números inteiros', (done) => {
      expect(soma(2, 3)).to.equal(5);
      expect(soma(20, 33)).to.equal(53);
      expect(soma(0, 15)).to.equal(15);
      expect(soma(15, 0)).to.equal(15);
      done();
  });

  lab.test('com apenas um parâmetro retorna o mesmo', (done) => {
      expect(soma(2)).to.equal(2);
      expect(soma(14)).to.equal(14);
      expect(soma(-7)).to.equal(-7);
      done();
  });

  lab.test('com números negativos', (done) => {
      expect(soma(-2, -5)).to.equal(-7);
      done();
  });
  lab.test('com três parâmetros', (done) => {
      expect(soma(3, 3, 3)).to.equal(9);
      done();
  });

  lab.test('com 8 parâmetros', (done) => {
      expect(soma(10, 10, 10, 10, 10, 10, 10, 10)).to.equal(80);
      done();
  });

  lab.test('com números quebrados', (done) => {
      expect(soma(10.33, 33.44, 67.11)).to.equal(110.88);
      done();
  });

});

lab.experiment('quando infroma parâmetros texto retorna erro específico', () => {
  lab.test('com todos parâmetros texto', (done) => {
      const r = soma('a', 'b');
      expect(r.message).to.equal("parâmentos inválidos")
      done();
  });

  lab.test('com algum parâmetro texto', (done) => {
      const r = soma(0, 1, 'c');
      expect(r.message).to.equal("parâmentos inválidos")
      done();
  });
});

lab.experiment('com array nos parâmetros', () => {
  lab.test('caso seja apenas um parâmetros e for array deve fazer o cálculo', (done) => {
      expect(soma([2,2,2])).to.equal(6);
      expect(soma(soma([2,2,2]), soma([2,2,2]))).to.equal(12);
      const numerosA = [1,2,3,4],
            numerosB = [2,4,7];
      expect(soma([...numerosA, ...numerosB])).to.equal(23);
      done();
  });
});

lab.experiment('com cálculos nos parâmetros', () => {
  lab.test('deve calcular corretamente', (done) => {
      expect(soma(3*3, 4*4)).to.equal(25);
      expect(soma(3+3, 4)).to.equal(10);
      expect(soma(soma(3, 3), 4)).to.equal(10);
      done();
  });
});

lab.experiment('com diversos tipos de parâmetros', () => {
  lab.test('deve retornar erro', (done) => {
      const r = soma('a', 2, 'C', [1,2,3]);
      expect(r.message).to.equal("parâmentos inválidos");
      done();
  });
});
