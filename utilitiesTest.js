const getRandomInteger = require('./getRandomInteger');
const getRandomElement = require('./getRandomElement');

const a = ['aap','noot','mies'];
const min = -21;
const max = 43;

console.log(`Random element uit array: ${getRandomElement.getRandomElement(a)}`);
console.log(`Random integer tussen -21 en 43: ${getRandomInteger.getRandomInteger(min, max)}`);

