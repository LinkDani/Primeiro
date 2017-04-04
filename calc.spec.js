const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});
lab.test('retorno da soma de 4 e 5 deve ser 9', (done) => {

    Code.expect(soma(4, 5)).to.equal(9);
    done();
});
lab.test('retorno da soma de 4 e 3 deve ser 7', (done) => {

    Code.expect(soma(4, 3)).to.equal(7);
    done();
});
lab.test('retorno da soma de -7 e -10 deve ser -17', (done) => {

    Code.expect(soma(-7, -10)).to.equal(-17);
    done();
});
lab.test('retorno da soma de -100 e -100 deve ser -200', (done) => {

    Code.expect(soma(-100, -100)).to.equal(-200);
    done();
});
var A = 1;
var B = 2;
var C = (A + B);
lab.test('retorno da soma de A e B deve ser C', (done) => {

    Code.expect(soma(A, B)).to.equal(C);
    done();
});
