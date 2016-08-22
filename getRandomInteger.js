/**
 * Get a random integer number, between given min (included) and max values (included).
 **/
exports.getRandomInteger  = function (min, max) {
	let maxOut = max + 1;
	min = Math.ceil(min);
	maxOut = Math.floor(maxOut);
	return Math.floor(Math.random() * (maxOut - min)) + min;
};
