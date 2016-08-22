import getRandomInteger from './getRandomInteger';

/**
 * Get a random Element from an array
 **/
export default function getRandomElement (a) {
	return a[getRandomInteger(0, a.length)];
};
