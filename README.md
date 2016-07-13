# private-access

Automatic private symbol creator.

## Installation

`npm install --save private-access`

## Usage

**NOTE** This only works in ES6-compatible environments.

Include in any module that you want to have private access variables.  Doing a one-line include / call can reduce the setup to almost none:

```
const _ = require('private-access').create();
```

Once a private access variable has been created, you can just use the dot-operator to create new Symbols:

**person.js**
```
// Try in the Node.JS REPL! ( Node v6.x.x )

const _ = require('private-access').create();

class Person {
	
	constructor( name, ssn ) {
		this.name = name;
		this[_.ssn] = ssn;
	}
	
	speak() {
		console.log('I like food!');
	}
	
	[_.whisper]() {
		console.log('...waaayyy too much.');
	}
}
```

**index.js**
```
// No access to `ssn` value or `whisper` method:

const Person = require('./person');
const person = new Person('John Doe', '123-12-1234');

console.log(`Hi, my name is ${person.name}`);

person.speak();

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT. Because.
