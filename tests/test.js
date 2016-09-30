/**
 * Created by anton.burkin on 9/27/2016.
 */

// import ArrayMethods from "../ArrayMethods.js";

describe('ArrayMethods 1. ', () => {
    var am = new ArrayMethods();
    var array = [1, 2, 3, 4, 5];
    it('Checking chain() and value() methods: ', () => {
        expect(am.chain(array).value()).toEqual([1, 2, 3, 4, 5]);
    });

    it('Checking take() method: ', () => {
        expect(am.take(array, 1)).toEqual([1]);
    });

    it('Checking skip() method: ', () => {
        expect(am.skip(array, 3)).toEqual([4, 5]);
    });

    it('Checking forEach() method: ', () => {
        let temp = [];
        am.forEach(array, i => temp.push(i * i));
        expect(temp).toEqual([1, 4, 9, 16, 25]);
    });

    it('Checking map() method: ', () => {
        expect(am.map(array, i=>i * 2)).toEqual([2, 4, 6, 8, 10]);
    });

    it('Checking reduce() method: ', () => {
        expect(am.reduce(array, (prev, curr) => prev + curr)).toEqual(15);
        expect(am.reduce([1, 2, 3, 4, 5, 3, 2, 4, 1],
            (previousValue, currentIndex, array) => array.indexOf(array[currentIndex]) === currentIndex ? previousValue + currentValue : previousValue)).toEqual(15);
    });

    it('Checking filter() method: ', () => {
        expect(am.chain([
            {id: 15}, {id: -1}, {id: 0},
            {id: null}, {id: NaN}, {id: undefined}
        ]).filter(obj => obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)).value()).toEqual([{id: 15}, {id: -1}, {id: 0}]);
    });
});