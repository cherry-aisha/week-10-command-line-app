const inquirer = require("inquirer");

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const questions = require('./questions');

const generateTeamPage = require('./pageBuilder');

const managers = [];
const interns = [];
const engineers = [];

const promptManagerQuestions = () => {
    inquirer
        .prompt(questions.managerQuestions)
        .then((response) => {

            //Create a new manager object
            const newManager = new Manager(response.id, response.name, response.email, response.officeNumber);

            //Add to array of managers
            managers.push(newManager);

            //Show the man menu again
            promptQuestions();
        })
}

const promptInternQuestions = () => {
    inquirer
        .prompt(questions.internQuestions)
        .then((response) => {

            //Create a new intern object
            const newIntern = new Intern(response.id, response.name, response.email, response.school);

            //Add to array of interns
            interns.push(newIntern);

            //Show the man menu again
            doQuestions();
        })
}

const promptEngineerQuestions = () => {
    inquirer
        .prompt(questions.engineerQuestions)
        .then((response) => {

            //Create a new engineer object
            const newEngineer = new Engineer(response.id, response.name, response.email, response.github);

            //Add to array of engineers
            engineers.push(newEngineer);

            //Show the man menu again
            doQuestions();
        })
}

const promptQuestions = () => {
    inquirer.prompt(questions.menuQuery)
        .then((response) => {

            console.log('option is set to ', response.option)
            switch (response.option) {

                case 'Add a Manager':

                    //Load the Manager Questions
                    promptManagerQuestions()
                    break;

                case 'Add an Engineer':

                    //Load the Engineer Questions
                    promptEngineerQuestions()
                    break;

                case 'Add an Intern':

                    //Load the Intern Questions
                    promptInternQuestions()
                    break;

                case 'Finish Building Team':
                    console.log("Build the team")

                    //Call Build the Team Page
                    generateTeamPage(managers, interns, engineers);
                    break;

            }
        })
};

module.exports = promptQuestions;