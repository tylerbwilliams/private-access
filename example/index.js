
const Person = require('./person');

const person = new Person('John Doe', '123-12-1234');

console.log(`Hi, my name is ${person.name}`);

person.speak();
