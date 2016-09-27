/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('Test 1. ', function() {
    it('Checking chain()&&value() methods: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).value()).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});

describe('Test 2. ', function() {
    it('Checking take() method: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(1).value()).toEqual([1]);
    });
});

describe('Test 3. ', function() {
    it('Checking skip() method: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(5).skip(3).value()).toEqual([4,5]);
    });
});

describe('Test 4. ', function() {
    it('Checking toString() method: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(5).skip(3).value().toString()).toEqual("4,5");
    });
});

describe('Test 5. ', function() {
    it('Checking forEach() method: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(5).skip(3).forEach(i=>console.log(i))).toEqual([4,5].forEach(i=>console.log(i)));
    });
});

describe('Test 6. ', function() {
    it('Checking map() method: ', function() {
        expect(ArrayMethods.chain([1,2,3,4,5,6,7,8,9,10]).take(5).skip(3).map(i=>i).value()).toEqual([4,5].map(i=>i));
    });
});