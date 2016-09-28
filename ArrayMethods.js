'use strict';

/*export default*/
class ArrayMethods {

    chain(array) {
        var self = result => this.chain(result);
        return {
            take: n => self(this.take(array, n)),
            skip: n => self(this.skip(array, n)),
            map: callback => self(this.map(array, callback)),
            forEach: callback => self(this.forEach(array, callback)),
            filter: callback => self(this.filter(array, callback)),
            value: () => array
        };
    }

    forEach(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }

    map(arr, callback) {
        var response = [];
        for (var i = 0; i < arr.length; i++) {
            response.push(callback(arr[i]));
        }
        return response;
    }

    skip(arr, n) {
        return arr.slice(n);
    }

    take(arr, n) {
        arr.length = n;
        return arr;
    }

    reduce(arr, callback) {
        var k = 0, value = callback;
        while (k < arr.length && !(k in arr)) {
            k++;
        }
        if (k >= arr.length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        value = arr[k++];
        for (; k < arr.length; k++) {
            if (k in arr) {
                value = callback(value, arr[k], k, arr);
            }
        }
        return value;
    };

    filter(arr, callback) {
        var response = [];
        for (var i = 0; i < arr.length; i++) {
            if (i in arr) {
                var val = arr[i];
                if (callback.call(callback, val, i, arr)) {
                    response.push(val);
                }
            }
        }
        return response;
    };
}
