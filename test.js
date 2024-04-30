// Import the `Employee` class.
const Employee = require('./employee');

// Create a new `Employee` with the `name` of "John Wick" , `occupation` of
// "Dog Lover".

john = new Employee('John Wick', 'Dog Lover');
console.log(john);

// setTimeout(john.sayName, 2000);     // "undefined says hello"

// Solve the problem using `bind` to make sure that "John Wick says hello" will
// will be printed to the terminal after 2 seconds.

const johnHello = john.sayName.bind(john);
global.setTimeout(johnHello, 2000);

// setTimeout(john.sayOccupation, 3000);    // "undefined is a undefined"

const johnJob = john.sayOccupation.bind(john);
global.setTimeout(johnJob, 3000);
