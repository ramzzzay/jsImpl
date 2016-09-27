/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('Users factory', function() {
    it('Checking chain method: ', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).value()).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});

describe('Users factory', function() {
    it('Checking take method: ', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(1).value()).toEqual([1]);
    });
});