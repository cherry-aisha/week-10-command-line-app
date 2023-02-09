const { prompt } = require('inquirer');
const questions = require('./src/questions');
const htmlGen = require('./src/htmlGen');
const init = () => {

    
    prompt(questions).then(ans => {
        if(ans.needEmp) return init();
        console.log(ans);
    })
};

init();
