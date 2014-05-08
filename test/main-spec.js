var script = require('../src/scripts/main.js');

describe("Script main.js Tests", function () {
    it("Execute method should return always true.", function () {
        expect(script.execute({msg: 'testing with jasmine-node'})).toBe(true);
    });
});