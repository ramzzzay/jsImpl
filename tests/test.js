/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('Test 1. ', () => {
    console.log("Test 1. Checking chain()&&value() methods");
    it('Checking chain()&&value() methods: ', ()=> {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).value()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    console.log("Test 1: OK");
});

describe('Test 2. ', () => {
    console.log("Test 2. Checking take() method");
    it('Checking take() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(1).value()).toEqual([1]);
    });
    console.log("Test 2: OK");
});

describe('Test 3. ', () => {
    console.log("Test 3. Checking skip() method");
    it('Checking skip() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).value()).toEqual([4, 5]);
    });
    console.log("Test 3: OK");
});

describe('Test 4. ', () => {
    console.log("Test 4. Checking toString() method");
    it('Checking toString() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).value().toString()).toEqual("4,5");
    });
    console.log("Test 4: OK");
});

describe('Test 5. ', () => {
    console.log("Test 5. Checking forEach() method");
    it('Checking forEach() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).forEach(i=>console.log(i))).toEqual([4, 5].forEach(i=>console.log(i)));
    });
    console.log("Test 5: OK");
});

describe('Test 6. ', () => {
    console.log("Test 6. Checking map() method");
    it('Checking map() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).map(i=>i).value()).toEqual([4, 5].map(i=>i));
    });
    console.log("Test 6: OK");
});

describe('Test 7. ', () => {
    console.log("Test 7. Checking reduce() method");
    it('Checking reduce() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).reduce((prev, curr) => prev + curr).value()).toEqual([4, 5].reduce((prev, curr) => prev + curr));
    });
    console.log("Test 7: OK");
});

describe('Test 8. ', () => {
    console.log("Test 8. Checking filter() method");
    function filterByID(obj) {
        if (obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
            return true;
        } else {
            return false;
        }
    };
    it('Checking filter() method: ', () => {
        expect(ArrayMethods.chain([
            {id: 15},
            {id: -1},
            {id: 0},
            {id: 3},
            {id: 12.2},
            {},
            {id: null},
            {id: NaN},
            {id: 'undefined'}
        ]).filter(filterByID).value()).toEqual([
            {id: 15},
            {id: -1},
            {id: 0},
            {id: 3},
            {id: 12.2},
            {},
            {id: null},
            {id: NaN},
            {id: 'undefined'}
        ].filter(filterByID));
    });
    console.log("Test 8: OK");
});