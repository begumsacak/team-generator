// TODO: Write code to define and export the Employee class
//Class declaration
// Class declaration applies to all employees by using getName(), getId(), and getEmail() functions
// Class constructors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
class Employee {
    constructor (name,id,email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    // this will check for the role of employee and the string will differ depending on each class
    getRole() {
        return "Employee";
    }
}

module.exports = Employee