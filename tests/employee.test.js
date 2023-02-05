const employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Collette";
            const email = "test@test.com";
            const role = "Employee";

            const obj = new employee(id, name, email, role);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
        });
    });
});