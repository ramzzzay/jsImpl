'use strict';

var ArrayMethods = {
    chain: function chain(array) {
        var curr = this;

        var self = function self(result) {
            return curr.chain(result);
        };
        return {
            take: function take(n) {
                return self(curr.take(array, n));
            },
            skip: function skip(n) {
                return self(curr.skip(array, n));
            },
            map: function map(callback) {
                return self(curr.map(array, callback));
            },
            forEach: function forEach(callback) {
                return self(curr.forEach(array, callback));
            },
            filter: function filter(callback) {
                return self(curr.filter(array, callback));
            },
            value: function value() {
                return array;
            }
        };
    },

    forEach:function forEach(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    },

    map: function map(arr, callback) {
        var response = [];
        for (var i = 0; i < arr.length; i++) {
            response.push(callback(arr[i]));
        }
        return response;
    },

    skip: function skip(arr, n) {
        return arr.slice(n);
    },

    take: function take(arr, n) {
        arr.length = n;
        return arr;
    },

    reduce: function reduce(arr, callback) {
        var k = 0,
            value = callback;
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
    },

    filter: function filter(arr, callback) {
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
    }
};