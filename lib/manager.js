const employee = require('./employee');

class manager extends employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole() {
            return "Manager";
        }
    }

    module.exports = manager;