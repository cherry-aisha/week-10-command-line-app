const employee = require('./employee');

class intern extends employee {
    constructor(school, role) {
        this.school = school;
        this.role = "Intern";
    }
        getSchool() {
            return this.school;
        }

        getRole() {
            return "Intern";
        }
    }

    module.exports = intern;