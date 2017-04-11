const { soma } = require('./calc');

console.log(soma());

console.log(soma(2, 3));

console.log(soma(20, 33));

console.log(soma(0, 15));

console.log(soma(15, 0));

console.log(soma(2));

console.log(soma(14));

console.log(soma(-7));

console.log(soma(-2, -5));

console.log(soma(3, 3, 3));

console.log(soma(10, 10, 10, 10, 10, 10, 10, 10));

console.log(soma(10.33, 33.44, 67.11));

console.log(soma('a', 'b'));

console.log(soma(0, 1, 'c'));

console.log(soma([2, 2, 2], [2, 2, 2]));

console.log(soma(3*3, 4*4));

console.log(soma(3+3, 4));

console.log(soma([3, 3], 4));

console.log(soma('a', 2, 'c', [1,2,3]));
