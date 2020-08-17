"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var assert = require('assert');
var dist_1 = require("../dist");
describe('index', function () {
    it('should add', function () {
        var res = dist_1.add(4, 5);
        assert.deepStrictEqual(res, 9);
    });
    it('should say hello motherfucker', function () {
        console.log("surprise motherfucker");
        assert.deepStrictEqual(true, true);
    });
});
//# sourceMappingURL=index.js.map