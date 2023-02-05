const employee = require('./employee');

class engineer extends employee {

    constructor(id, name, email, github) {
        super(id, name, email);

        this.gitHub = github;
    }
        getGitHub() {
            return this.github;
        }

        getRole() {
            return "Engineer";
        }
    }

    module.exports = engineer;