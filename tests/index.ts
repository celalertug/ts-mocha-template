import "mocha"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert');


import {add} from '../dist';


describe('index', function () {

    it('should add', function () {
        const res = add(4, 5);
        assert.deepStrictEqual(res, 9);


    });

    it('should say hello motherfucker', function () {
        console.log("surprise motherfucker");
        assert.deepStrictEqual(true, true);

    });

});
