const employee = require('./employee');

class engineer extends employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }
        getGitHub() {
            return this.gitHub;
        }

        getRole() {
            return "Engineer";
        }
    }

    module.exports = engineer;