const questions = [
    {
        type: 'confirm',
        name: 'needEmp',
        message: 'Do you need to fill a position?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which position would like to fill?',
        choices: ['Manager', 'Engineer', 'Intern'],
        when: ({ needEmp }) => needEmp
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?',
        when: ({ needEmp }) => needEmp
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s ID?',
        when: ({ needEmp }) => needEmp
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
        when: ({ needEmp }) => needEmp
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({ role }) => role == 'Manager'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: ({ role }) => role == 'Intern'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub User Name?',
        when: ({ role }) => role == 'Engineer'
    }
];

module.exports = questions;