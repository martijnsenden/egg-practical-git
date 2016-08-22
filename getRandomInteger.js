/**
 * Get a random integer number, between and including given min and max values.
 **/
function getRandomInteger (min, max) {
	let max = max + 1;
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
