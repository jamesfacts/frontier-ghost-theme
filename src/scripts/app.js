(() => {
	'use strict';

	// create wrapper arrow function expression of console.log
	var log = message => console.log(message);

	log('Testing out arrow functions!');

	// instead of specifying a traditional anonymous function
	// expression to map we can use an arrow function
	log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => value * value));

}) ();
