const getRandomInteger = require('./getRandomInteger');

/**
 * Get a random Element from an array
 **/
exports.getRandomElement = function (a) {
	return a[getRandomInteger.getRandomInteger(0, a.length - 1)];
};
