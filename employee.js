class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    // INSTANCE methods
    sayName() {
        console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        console.log(`${this.name} is a ${this.occupation}`);
    }


    // CLASS methods
}


// export the Employee class from the file

module.exports = Employee
