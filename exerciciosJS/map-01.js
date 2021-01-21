const nums = [1, 2, 3, 4, 5, 6];

const doubleNums = nums.map(e => e * 2);

console.log(doubleNums);

const tripleNums = doubleNums.map(e => e * 3);

console.log(tripleNums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

const resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado)