const pageBuilder = require('./src/pageBuilder');

const init = () => {
    doQuestions().then(answer => {
        console.log(answer);
    })
    }

init();
