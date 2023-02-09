const pageBuilder = require('./src/pageBuilder');

const init = () => {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        pageBuilder("html", answers)
    })
}

init();
