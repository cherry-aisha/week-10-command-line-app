const { default: inquirer } = require("inquirer");

const manager = require('../lib/manager');
const intern = require('../lib/intern');
const engineer = require('../lib/engineer');

const questions = require('./questions');

const buildTeamPage = require('./pageBuilder');

const managers = [];
const interns = [];
const engineers = [];


const doManagerQuestions = () => {
    inquirer
    .prompt(questions.managerQuestions)
    .then((response) => {

        //Create a new manager object
        const manager = new manager(response.id, response.name, response.email, response.officeNumber, response.role);

        //Add to array of managers
        managers.push(manager);

        //Show the man menu again
        doMenuQuestions();
    })
}

const doInternQuestions = () => {
    inquirer
    .prompt(questions.internQuestions)
    .then((response) => {

                //Create a new intern object
                const intern = new intern(response.id, response.name, response.email, response.school, response.role);

                //Add to array of interns
                intern.push(intern);
        
                //Show the man menu again
                doMenuQuestions();
    })
}

const doEngineerQuestions = () => {
    inquirer
    .prompt(questions.engineerQuestions)
    .then((response) => {

                //Create a new engineer object
                const engineer = new engineer(response.id, response.name, response.email, response.github, response.role);

                //Add to array of engineers
                engineer.push(engineer);
        
                //Show the man menu again
                doMenuQuestions();
    })
}

const doMenuQuestions = () => {
    inquirer
    .prompt(Questions.MainMenuQuestions)
    .then((response) => {
        switch (response.option) {

            case 'Add a Manager':

                //Load the Manager Questions
                doManagerQuestions()
                break;

            case 'Add an Engineer':

                //Load the Engineer Questions
                doEngineerQuestions()
                break;
            
            case 'Add an Intern':

                //Load the Intern Questions
                doInternQuestions()
                break;
            
            case 'Build the team':
                console.log("Build the team")

                //Call Build the Team Page
                buildTeamPage(managers, engineers, interns);
                break;
            default:
                console.log('default');
                break;

        }
    })
}