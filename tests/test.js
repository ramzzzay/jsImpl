/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('ArrayMethods 1. ', () => {
    var am = new ArrayMethods();
    var array = [1, 2, 3, 4, 5];
    it('Checking chain()&&value() methods: ', ()=> {
        expect(am.chain(array).value()).toEqual([1, 2, 3, 4, 5]);
    });

    it('Checking take() method: ', () => {
        expect(am.take(array, 1)).toEqual([1]);
    });

    it('Checking skip() method: ', () => {
        expect(am.skip(array, 3)).toEqual([4, 5]);
    });

    it('Checking forEach() method: ', () => {
        let awaited = [];
        am.forEach(array, i=>awaited.push(i*i));
        expect(awaited).toEqual([ 1, 4, 9, 16, 25 ]);
    });

    it('Checking map() method: ', () => {
        expect(am.map(array, i=>i * 2)).toEqual([2, 4, 6, 8, 10]);
    });

    it('Checking reduce() method: ', () => {
        expect(am.reduce(array, (prev, curr) => prev + curr)).toEqual(15);
    });

    it('Checking filter() method: ', () => {
        function filterByID(obj) {
            if (obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
                return true;
            } else {
                return false;
            }
        };
        expect(am.chain([
            {id: 15}, {id: -1}, {id: 0},
            {id: 3}, {id: 12.2}, {},
            {id: null}, {id: NaN}, {id: 'undefined'}
        ]).filter(filterByID).value()).toEqual([{id:15},{id:-1},{id:0},{id:3},{id:12.2}]);
    });
});