const Manager = require("../lib/manager");

describe("manager", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Collette";
            const email = "test@test.com";
            const officeNumber = "0000001"
            const role = "Manager";

            const obj = new Manager(id, name, email, officeNumber);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
            expect(obj.getRole()).toEqual(role);
        });
    });
});