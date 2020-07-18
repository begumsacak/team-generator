// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Inherits from employee so requires employee.js
const Employee = require("./Employee.js")


//class Dog extends Animal {
    //constructor(name) {
        //super(name); // call the super class constructor and pass in the name parameter
      //}


class Manager extends Employee {
    constructor(name,id ,email, office) {
        super(name,id,email);
        //setting up a new property that's not part of the employee class
        this.office = 100
    }

    getOfficeNumber() {
        return office
    }
    getRole () {
        return "Manager"
    }
}

module.exports = Manager