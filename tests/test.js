/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('ArrayMethods 1. ', () => {
    var am = new ArrayMethods();
    it('Checking chain()&&value() methods: ', ()=> {
        expect(am.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).value()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('Checking take() method: ', () => {
        expect(am.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(1).value()).toEqual([1]);
    });

    it('Checking skip() method: ', () => {
        expect(am.chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).skip(3).value()).toEqual([4, 5, 6, 7, 8, 9, 10]);
    });

    it('Checking forEach() method: ', () => {
        expect(am.forEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],i=>console.log(i))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i=>console.log(i)));
    });

    it('Checking map() method: ', () => {
        expect(am.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],i=>i*2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it('Checking reduce() method: ', () => {
        expect(am.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],(prev, curr) => prev + curr)).toEqual(55);
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
        expect(am.chain([
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