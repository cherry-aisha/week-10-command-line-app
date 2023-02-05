const employee = require('./employee');

class engineer extends employee {
    constructor(gitHub, role) {
        this.gitHub = gitHub;
        this.role = "";
    }
        getGitHub() {
            return this.gitHub;
        }

        getRole() {
            return "Engineer";
        }
    }

    module.exports = engineer;