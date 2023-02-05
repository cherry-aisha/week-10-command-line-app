const employee = require('./employee');

class manager extends employee {

    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        
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