const menuQuestions =([
    {
        type: 'list',
        name: 'role',
        message: 'What would you like to do?',
        choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern'],
    }
]);

const managerQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s ID number?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
    }
]);

const internQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s ID number?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
    }
]);

const engineerQuestions = ([
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s ID number?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engneer\'s email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub?',
    }
]);

module.exports = {menuQuestions, managerQuestions, internQuestions, engineerQuestions};