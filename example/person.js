
const _ = require('../es6').create();

class Person {
	
	constructor( name, ssn ) {
		this.name = name;
		this[_.ssn] = ssn;
	}
	
	speak() {
		console.log('I like food!')
	}
	
	[_.whisper]() {
		console.log('...waaayyy too much.');
	}
}

module.exports = Person;
