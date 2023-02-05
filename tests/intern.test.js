const intern = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Collette";
            const email = "test@test.com";
            const school = "test school"
            const role = "Intern";

            const obj = new intern(id, name, email, school, role);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
            expect(obj.role).toEqual(role);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getschool()).toEqual(school);
            expect(obj.getRole()).toEqual(role);
        });
    });
});