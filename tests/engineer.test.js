const engineer = require("../lib/engineer");

describe("engineer", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Collette";
            const email = "test@test.com";
            const github = "@test"
            const role = "Engineer";

            const obj = new engineer(id, name, email, github);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);

            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getGithub()).toEqual(github);
            expect(obj.getRole()).toEqual(role);
        });
    });
});