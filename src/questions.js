const menuQuery = ([
    {
        type: 'list',
        name: 'option',
        message: 'Who would you like to add to your team?',
        choices: ['Manager', 'Engineer', 'Intern', 'I want to finish building the team'],
    }
]);

const managerQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s ID?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
    }
]);

const engineerQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s ID?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engneer\'s email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub page URL?',
    }
]);

const internQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s ID?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
    }
]);

module.exports = { menuQuery, managerQuestions, internQuestions, engineerQuestions };