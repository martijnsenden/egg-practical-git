/**
 * Get a random Element
 **/
function getRandomElement (a) {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return a[getRandomInt(0, a.length)];
}
