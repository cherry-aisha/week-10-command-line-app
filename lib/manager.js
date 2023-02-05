const employee = require('./employee');

class manager extends employee {
    constructor(officeNumber, role) {
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole() {
            return "Manager";
        }
    }

    module.exports = manager;