/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('Test 1. ', () => {
    it('Checking chain()&&value() methods: ', ()=> {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).value()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('Checking take() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(1).value()).toEqual([1]);
    });

    it('Checking skip() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).value()).toEqual([4, 5]);
    });

    it('Checking toString() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).value().toString()).toEqual("4,5");
    });

    it('Checking forEach() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).forEach(i=>console.log(i))).toEqual([4, 5].forEach(i=>console.log(i)));
    });

    it('Checking map() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).map(i=>i).value()).toEqual([4, 5].map(i=>i));
    });

    it('Checking reduce() method: ', () => {
        expect(ArrayMethods.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(5).skip(3).reduce((prev, curr) => prev + curr).value()).toEqual([4, 5].reduce((prev, curr) => prev + curr));
    });


//
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
});

describe('Test 8. ', () => {

});