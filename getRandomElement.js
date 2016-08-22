import getRandomInteger from './getRandomInteger';

/**
 * Get a random Element
 **/
export default function getRandomElement (a) {
	return a[getRandomInteger(0, a.length)];
};
