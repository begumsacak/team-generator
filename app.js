const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//we will push to an empty array of new team as new members are dynamically created
let newTeam = [];


function promptQuestion() {
    return inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Who do you want to add to the team?",
            choices: [
                "Manager"
                "Engineer",
                "Intern",
                "None"
            ]
        },
    ]).then(answers => {
        if (answers.teamMember === "Manager") {
            return promptManager()
        }
        else if (answers.teamMember === "Engineer") {
            return promptEngineer()
        }
        else if (answers.teamMember === "Intern") {
            return promptIntern()
        } else {
            return
        }
    })
}


function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter manager's name",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter manager's email",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter manager ID",
        },
        //The following question is unique to managers only
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter manager's office room number",
        },
    ])
        // Creates a new manager based on the input
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            newTeam.push(manager)
            return promptQuestion()
        })
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter engineer name",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter engineer email",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter engineer ID",

        },
        {
            type: "input",
            name: "github",
            message: "Please enter engineer's github username",
        },
    ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            newTeam.push(engineer)
            return prompQuestion()
        })
}
function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter intern's name",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter intern's email",

        },
        {
            type: "input",
            name: "id",
            message: "Please enter intern's ID",

        },
        {
            type: "input",
            name: "school",
            message: "Please enter the school that intern has most recently attended",

        },
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            newTeam.push(intern)
            return promptQuestion()
        })
}

function writeFile()
    .then(function () {
    //Call htmlRenderer function and passing the data

})
    .catch(function (err) {
        console.log(err);
    });

function writeFile() {
        .then(function () {
        const render = htmlRenderer(data)
        return writeFileAsync("output/team.html", render);
    } catch (err) {
    console.log(err);
}
}
