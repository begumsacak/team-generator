// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//Inherits from employee so requires employee.js
const Employee = require("./Employee.js")

//class Dog extends Animal {
    //constructor(name) {
        //super(name); // call the super class constructor and pass in the name parameter
      //}

class Engineer extends Employee {
    constructor(name,id,email, github) {
        super(name,id,email);
        //setting up a new property that's not part of the employee class
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer