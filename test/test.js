const assert = require('chai').assert;
const randomAddressesCreation = require('../function').randomAddressesCreation;

describe("function test", function () {
    it("function should return object", function () {
        assert.typeOf(randomAddressesCreation(), "object")
    });

    it("object should contain 10 items", function () {
        assert.equal(randomAddressesCreation().address.length, 10)
    });

    it("each item in list should have 3 specific fields", function () {
        const addressList = randomAddressesCreation().address;
        const fields = ["zipCode", "zipCodeByState", "city"]
        for (var i in addressList) {
            for (var j in fields) {
                assert.typeOf(addressList[i][fields[j]], "string")
                assert.isAbove(addressList[i][fields[j]].length, 0)
            }
        }
    });
});