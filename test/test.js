var assert = require("assert");
var parser = require("../index");

function isEqual(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2))
        return false;

    if(arr1.length != arr2.length)
        return false;

    for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

describe("parse() method", function() {
    var str = require("./mdstring");
    it("should return an array of 5 links", function(done) {
        var links = require("./mdlinks");
        var actual = isEqual(parser.parse(str), links);
        assert.equal(actual, true);
        done();
    });
});
